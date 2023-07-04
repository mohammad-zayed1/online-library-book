import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import Swal from "sweetalert2";
import axios from "axios";

import { Footer } from "../../components/Footer";
import { NavbarHome } from "../../components/NavbarHome";

import { CartContext } from "../../App";

export const Checkout = () => {
  const { cart , setCart,  total , calculateCount , count , setCount ,refresh,setRefresh} =
    useContext(CartContext);
  // const [items, setItems] = useState(JSON.parse(localStorage.getItem("cart")));
  // const [total, setTotal] = useState(0);

  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
 

  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState({
    userID: "",
    customerName: "",
  });
  const [info, setInfo] = useState({
    address: "",
    phone: "",
  });
  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate("/login");
      }
      const { data } = await axios.post(
        "http://localhost:6600",
        {},
        { withCredentials: true }
      );
      const { status, user } = data;
      setUsername(user);
      setUserData((prev) => ({
        ...prev,
        userID: data.id,
        customerName: user,
      }));
      
      return status ? "" : (removeCookie("token"), navigate("/login"));
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);
  const Logout = () => {
    removeCookie("token");
    navigate("/login");
  };

  // const calculateCount = () => {
  //   const totalProduct = cart?.reduce((acc, item) => acc + item.count, 0);
  //   setCount(totalProduct);
  // };
  // console.log(count)

 
  console.log(userData);
  const handleSubmit = async (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "success",
      showCancelButton: true,
      confirmButtonColor: "#519903",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Confirm Payment",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Confirmed!", "Your Payment has been canceled.", "success");
      }
       calculateCount();
      const { userID, customerName } = userData;
      const { address, phone } = info;
      console.log("id:" , userID,"name:", customerName,"address:", address,"phone:", phone);
       axios.post("http://localhost:6600/addorder", {
        userID: userID,
        customerName: customerName,
        products: cart,
        address: address,
        phone: phone,
        quantity: count,
        total: total,
      });
      navigate('/home');
    }).then(()=>{
    
      setUserData({
        address:"",
        phone:""
      })
      setCart([]);
      setCount(0)
      // setRefresh(!refresh)

    })
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  console.log("count", count);
  console.log('cart' , cart)

  console.log("info", info);

  return (
    <>
      <NavbarHome logout={Logout} />
      <div className="relative mx-auto my-12 w-full max-w-7xl bg-white">
        <div className="grid grid-cols-10">
          {/* :CHECKOUT FORM CONTAINER */}
          <div className="col-span-full lg:col-span-6 py-6 sm:py-12 lg:py-24 px-4">
            <div className="mx-auto w-full max-w-lg">
              {/* ::Title */}
              <h1 className="relative text-2xl sm:text-3xl text-gray-700 font-medium">
                Secure Checkout
                <span className="mt-2 w-10 sm:w-20 h-1 block bg-primary" />
              </h1>

              {/* ::Checkout Form */}
              <form
                action="post"
                className="mt-10 flex flex-col space-y-4"
                onSubmit={handleSubmit}
              >
                {/* :::Email address */}
                <div>
                  {/* ::::label */}
                  <label
                    htmlFor="card-name"
                    className="text-xs text-gray-500 font-semibold"
                  >
                    Card name
                  </label>
                  {/* ::::input */}
                  <input
                    type="text"
                    id="card-name"
                    name="card-name"
                    placeholder="Name on the card"
                    className="form-input mt-1 w-full block shadow-sm rounded border-gray-300 bg-gray-50 text-sm placeholder-gray-300 focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                </div>
                {/* :::Card number */}
                <div className="relative">
                  {/* ::::label */}
                  <label
                    htmlFor="card-number"
                    className="text-xs text-gray-500 font-semibold"
                  >
                    Card number
                  </label>
                  {/* ::::input */}
                  <input
                    type="text"
                    id="card-number"
                    name="card-number"
                    maxLength={14}
                    minLength={14}
                    placeholder="1234-5678-XXXX-XXXX"
                    className="form-input pr-10 w-full block shadow-sm rounded border-gray-300 bg-gray-50 text-sm placeholder-gray-300 focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                  {/* ::::visa logo */}
                  {/* <img
                    src="https://fancytailwind.com/static/visa-icon-5282a8660b2ad42cbdcf817d51129c0a.png"
                    alt=""
                    className="absolute bottom-3 right-3 max-h-4"
                  /> */}
                </div>
                {/* :::Expiration date */}
                <div>
                  <div className="mr-6 flex flex-wrap gap-2 mb-4">
                    {/* ::::select month */}
                    <div className="my-1">
                      <label
                        htmlFor="month"
                        className="text-xs text-gray-500 font-semibold"
                      >
                        Month
                      </label>
                      <input
                        type="text"
                        id="month"
                        name="month"
                        maxLength={2}
                        minLength={1}
                        placeholder="month"
                        className="form-input w-36 block shadow-sm rounded border-gray-300 bg-gray-50 text-sm placeholder-gray-300 focus:border-primary focus:ring-1 focus:ring-primary"
                      />
                    </div>
                    <div className="my-1">
                      <label
                        htmlFor=" Expiration date"
                        className="text-xs text-gray-500 font-semibold"
                      >
                        Year
                      </label>
                      <input
                        type="text"
                        id=" year"
                        name="year"
                        placeholder="year"
                        maxLength={4}
                        minLength={4}
                        className="form-input w-36 block shadow-sm rounded border-gray-300 bg-gray-50 text-sm placeholder-gray-300 focus:border-primary focus:ring-1 focus:ring-primary"
                      />
                    </div>

                    {/* ::::security code */}
                    <div className="my-1 relative">
                      <label
                        htmlFor="security-code"
                        className="text-xs text-gray-500 font-semibold"
                      >
                        Security code
                      </label>
                      <input
                        type="text"
                        id="security-code"
                        name="security-code"
                        placeholder="CVV"
                        maxLength={3}
                        minLength={3}
                        className="form-input w-36 block shadow-sm rounded border-gray-300 bg-gray-50 text-sm placeholder-gray-300 focus:border-primary focus:ring-1 focus:ring-primary"
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    {/* ::::label */}
                    <label
                      htmlFor="address"
                      className="text-xs text-gray-500 font-semibold"
                    >
                      Address
                    </label>
                    {/* ::::input */}
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={info.address}
                      onChange={handleChange}
                      placeholder="Your address"
                      className="form-input mt-1 w-full block shadow-sm rounded border-gray-300 bg-gray-50 text-sm placeholder-gray-300 focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div className="mb-4">
                    {/* ::::label */}
                    <label
                      htmlFor="Phone-Number"
                      className="text-xs text-gray-500 font-semibold"
                    >
                      Phone Number
                    </label>
                    {/* ::::input */}
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      value={info.phone}
                      onChange={handleChange}
                      placeholder="Your Phone Number"
                      className="form-input mt-1 w-full block shadow-sm rounded border-gray-300 bg-gray-50 text-sm placeholder-gray-300 focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="mt-4 py-2.5 px-4 w-full inline-flex justify-center items-center rounded bg-primary text-base sm:text-lg text-white text-opacity-80 font-semibold tracking-wide hover:bg-[#458106] transition"
                >
                  {/* <LockClosedIcon className="mr-3 w-5 h-5" /> */}
                  Place Order
                </button>
              </form>

              {/* ::Info */}
              <p className="mt-10 text-center text-sm text-gray-500 font-semibold">
                By placing this order you agree to the{" "}
                <a
                  href="#link"
                  className="text-primary underline hover:text-[#458106] whitespace-nowrap"
                >
                  Terms and Conditions
                </a>
              </p>

              {/* ::Submit Button */}
            </div>
          </div>

          {/* :RECAP CONTAINER */}
          <div className="col-span-full lg:col-span-4 relative py-6 sm:py-12 lg:py-24 pl-8 pr-4 flex flex-col">
            {/* ::Title */}
            <h2 className="sr-only">Order summary</h2>

            {/* ::Background Image */}
            <div>
              <img
                src="https://fancytailwind.com/static/library-fa7aea16a963a82df967b09479d3290f.jpg"
                alt="img"
                className="absolute inset-0 w-full h-full"
              />
              <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-[#125a22] to-[#8dfb95] opacity-75" />
            </div>

            {/* ::Order Summary */}
            <div className="relative">
              {/* :::Item list */}
              <ul className="space-y-5">
                {cart.map((item) => (
                  <li key={item._id} className="flex justify-between">
                    {/* ::::item infos */}
                    <div className="inline-flex">
                      <img
                        src="https://th.bing.com/th/id/OIP.AuKe45hzeut0bmsMuslmQQDuEs?w=143&h=180&c=7&r=0&o=5&pid=1.7"
                        alt=""
                        className="max-h-16"
                      />
                      <div className="ml-3">
                        <p className="text-base text-white font-semibold">
                          {item.name}
                        </p>
                        <p className="text-sm text-white text-opacity-80 font-medium">
                          {item.author}
                        </p>
                        <p className="text-sm text-white font-semibold">{`count : ${item.count}`}</p>
                      </div>
                    </div>
                    {/* ::::item price */}
                    <p className="text-sm text-white font-semibold">{`$${item.price}`}</p>
                  </li>
                ))}
              </ul>
              {/* :::Separation */}
              <div className="my-5 w-full h-0.5 bg-white bg-opacity-30" />
              {/* :::Total */}
              <div className="space-y-2">
                {/* ::::total price */}
                <p className="flex justify-between text-lg text-white font-bold">
                  <span>Total price:</span>
                  <span>{`$${total}`}</span>
                </p>
                {/* ::::vat */}
              </div>
            </div>

            {/* ::Contact Infos */}
            <div className="relative mt-10 text-white">
              <h3 className="mb-5 text-lg font-bold">Hotline</h3>
              <p className="text-sm font-semibold">
                +01 23 456 789{" "}
                <span className="font-light">(International)</span>
              </p>
              <p className="mt-1 text-sm font-semibold">
                +9(876) 543 210{" "}
                <span className="font-light">(USA / Canada)</span>
              </p>
              <p className="mt-2 text-xs font-medium">
                (24/7 English phone support for online payment related issues)
              </p>
            </div>

            {/* ::Guarantee */}
            <div className="relative mt-10 flex">
              {/* <BadgeCheckIcon className="mr-3 w-10 h-10 text-yellow-400" /> */}
              <p className="flex flex-col">
                <span className="text-sm text-white font-bold">
                  Money Back Guarantee
                </span>
                <span className="text-xs text-white font-medium">
                  within 30 days of purchase
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
