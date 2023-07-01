import { useEffect, useState , useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer} from "react-toastify";

import { NavbarHome } from "../../components/NavbarHome";
import { Footer } from "../../components/Footer";
// import { FaCcMastercard, FaCcVisa, FaCcPaypal } from "react-icons/fa";
// import { BsPlus } from "react-icons/bs";
// import { GrFormSubtract } from "react-icons/gr";

import { Link } from "react-router-dom";
import emptyCart from '../../assets/img/undraw_empty_cart_co35.svg'
import  {CartContext} from '../../App';
export const Cart = () => {

  const {cart , setCart , total , setTotal , addToCart , calculateTotal , userData} = useContext(CartContext);

    // const [items , setItems] = useState(JSON.parse(localStorage.getItem('cart')));


    // useEffect(()=>{
    //   setItems
    // })

    const navigate = useNavigate();
    const [cookies, removeCookie] = useCookies([]);
    const [username, setUsername] = useState("");
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
        return status
          ? ""
          : (removeCookie("token"), navigate("/login"));
      };
      verifyCookie();
    }, [cookies, navigate, removeCookie]);
    const Logout = () => {
      removeCookie("token");
      navigate("/login");
    }

// console.log(items)






 // Increase quantity of an item in the cart
// const increaseQuantity = (itemId) => {
//   const cartData = JSON.parse(localStorage.getItem('cart'));

//   // Find the item in the cart
//   const item = cartData.find((item) => item._id === itemId);

//   if (item) {
//     // Increase the quantity by 1
//     item.count += 1;
//     localStorage.setItem('cart', JSON.stringify(cartData));
  
//   }
// };

const increaseQuantity = (itemId) => {
  const updatedCartData = cart?.map((item) => {
    if (item._id === itemId) {
      return {
        ...item,
        count: item.count + 1,
      };
    }
    return item;
  });
  
  setCart(updatedCartData);
  localStorage.setItem('cart', JSON.stringify(updatedCartData));
};



const decreaseQuantity = (itemId) => {
  const updatedCartData = cart?.map((item) => {
    if (item._id === itemId) {
      const updatedQuantity = Math.max(0, item.count - 1);
      if (updatedQuantity === 0) {
        // Remove the item from cart data when quantity becomes 0
        return null;
      }
      return {
        ...item,
        count: updatedQuantity,
      };
    }
    return item;
  });

  const filteredCartData = updatedCartData?.filter((item) => item !== null);
  
  setCart(filteredCartData);
  localStorage.setItem('cart', JSON.stringify(filteredCartData));
};


const products = cart?.map((item ) => {
  
return (
  <li className="flex items-center gap-4" key={item._id}>
    <img 
     src="https://th.bing.com/th/id/OIP.AuKe45hzeut0bmsMuslmQQDuEs?w=143&h=180&c=7&r=0&o=5&pid=1.7"
    // src={item.img}
     alt="" 
     className="h-20 w-20 rounded object-cover" />

    <div>
      <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>

      <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
        <div>
          <dt className="inline text-sm">price: </dt>
          <dd className="inline text-sm">
            ${item.price}
          </dd>
        </div>
      </dl>
    </div>

    <div className="flex flex-1 items-center justify-end gap-2">
    <button
        className="text-gray-600 transition hover:text-red-600 text-[30px] "
        onClick={()=>decreaseQuantity(item._id)}
        id={item._id}
      >
        <span className="sr-only">Remove item</span>
        <span>-</span>

       
      </button>
      <form>
        <label htmlFor="Line1Qty" className="sr-only">
          {" "}
          Quantity{" "}
        </label>

        <input
          type="number"
          min="0"
          value={item.count}
          id="Line1Qty"
          readOnly
          className="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
        />
      </form>

      <button
        className="text-gray-600 transition hover:text-green-600"
        onClick={()=>increaseQuantity(item._id)}
        id={item._id}
      >
        <span className="sr-only">Remove item</span>
        <span>+</span>

       
      </button>
    </div>
  </li>
)
})



  return (
    <div className="flex flex-col h-screen ">
      <NavbarHome logout={Logout} />

      <section className="mt-[80px] flex-1 items-center">
        {products.length > 0 ?
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <header className="text-center">
              <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
                Your Cart
              </h1>
            </header>

            <div className="mt-8">

  
              <ul className="space-y-4">
              {products}
              </ul>
              
              




              <div className="mt-8 flex justify-center border-t border-gray-100 pt-8">
                <div className="w-screen max-w-lg space-y-4">
                  <dl className="space-y-0.5 text-sm text-gray-700">
                    <div className="flex justify-between">
                      <dt>Subtotal</dt>
                      <dd>${total}</dd>
                    </div>

                    <div className="flex justify-between">
                      <dt>VAT</dt>
                      <dd> $2 </dd>
                    </div>

                    <div className="flex justify-between !text-base font-medium">
                      <dt>Total</dt>
                      <dd> ${total + 2}</dd>
                    </div>
                  </dl>

                  <div className="flex justify-between">
                    <button onClick={()=> navigate('/home')} className="bg-transparent transition hover:bg-[#458106] text-black font-semibold hover:text-white py-2 px-4 border border-primary hover:border-transparent rounded">
                      Back
                    </button>
                    <Link
                      to="/checkout"
                      className="block rounded bg-primary px-5 py-3 text-sm text-white transition hover:bg-[#458106]"
                    >
                      Checkout
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        :
        <div className="h-60 flex flex-col items-center justify-center my-52 ">
                <h1 className="text-[25px] font-bold my-8">Your cart <span className="text-primary">is empty.</span> </h1>
                <img className="max-w-full max-h-full " src={emptyCart} alt="empty cart" />
                <button onClick={()=> navigate('/home')} className="btn btn-primary my-16">Back to Store</button>
                </div>
}
      </section>
<ToastContainer/>
      <Footer />
    </div>
  );
};



