// import {
//   BadgeCheckIcon,
//   InformationCircleIcon,
//   LockClosedIcon,
// } from "@heroicons/react/solid";

import { useEffect , useState} from "react";

export const Checkout = () => {


    const [items, setItems] = useState(
      JSON.parse(localStorage.getItem("cart"))
    );
    const [total, setTotal] = useState(0);

    console.log(items);

    const calculateTotal = () => {
      const totalPrice = items.reduce(
        (acc, item) => acc + item.price * item.count,
        0
      );
      setTotal(totalPrice);
    };

    useEffect(() => {
      calculateTotal();
    }, []);

//   const order = {
//     total: 110,
//     vat: 15,
//     items: [
//       {
//         id: 1,
//         name: "Better Fancy Tailwind",
//         details: "Pdf, doc Kindle",
//         price: 60,
//         picture:
//           "https://fancytailwind.com/static/book1-6ce85c031c77684660e049557ced3be1.jpg",
//       },
//       {
//         id: 2,
//         name: "The last Cruise",
//         details: "epub",
//         price: 50,
//         picture:
//           "https://fancytailwind.com/static/book2-39b09b09fa5e284f4b03fe96dabcefd0.jpg",
//       },
//     ],
//   };

  return (
    <div className="relative mx-auto w-full max-w-7xl bg-white">
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
            <form action="" className="mt-10 flex flex-col space-y-4">
              {/* :::Email address */}
              <div>
                {/* ::::label */}
                <label
                  htmlFor="email"
                  className="text-xs text-gray-500 font-semibold"
                >
                  Email
                </label>
                {/* ::::input */}
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="myaddress@example.com"
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
                  placeholder="1234-5678-XXXX-XXXX"
                  className="form-input pr-10 w-full block shadow-sm rounded border-gray-300 bg-gray-50 text-sm placeholder-gray-300 focus:border-primary focus:ring-1 focus:ring-primary"
                />
                {/* ::::visa logo */}
                <img
                  src="https://fancytailwind.com/static/visa-icon-5282a8660b2ad42cbdcf817d51129c0a.png"
                  alt=""
                  className="absolute bottom-3 right-3 max-h-4"
                />
              </div>
              {/* :::Expiration date */}
              <div>
                {/* ::::title */}
                <p className="text-xs text-gray-500 font-semibold">
                  Expiration date
                </p>
                <div className="mr-6 flex flex-wrap">
                  {/* ::::select month */}
                  <div className="my-1">
                    <label htmlFor="month" className="sr-only">
                      Select expiration month
                    </label>
                    <select
                      name="month"
                      id="month"
                      className={`form-select shadow-sm rounded border-gray-300 bg-gray-50 text-sm cursor-pointer focus:border-primary focus:ring-1 focus:ring-primary`}
                    >
                      <option value="">Month</option>
                    </select>
                  </div>
                  {/* ::::select year */}
                  <div className="my-1 ml-3 mr-6">
                    <label htmlFor="year" className="sr-only">
                      Select expiration year
                    </label>
                    <select
                      name="year"
                      id="year"
                      className={`form-select shadow-sm rounded border-gray-300 bg-gray-50 text-sm cursor-pointer focus:border-primary focus:ring-1 focus:ring-primary`}
                    >
                      <option value="">Year</option>
                    </select>
                  </div>
                  {/* ::::security code */}
                  <div className="my-1 relative">
                    <label htmlFor="security-code" className="sr-only">
                      Security code
                    </label>
                    <input
                      type="text"
                      id="security-code"
                      name="security-code"
                      placeholder="Security code"
                      className="form-input w-36 block shadow-sm rounded border-gray-300 bg-gray-50 text-sm placeholder-gray-300 focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                    <button className="absolute top-1/2 -right-6 inline-flex justify-center items-center text-gray-400 hover:text-primary transform -translate-y-1/2">
                      {/* <InformationCircleIcon className="w-5 h-5" /> */}
                    </button>
                  </div>
                </div>
              </div>
              {/* :::Card name */}
              <div>
                {/* ::::label */}
                <label htmlFor="card-name" className="sr-only">
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
            <button
              type="submit"
              className="mt-4 py-2.5 px-4 w-full inline-flex justify-center items-center rounded bg-primary text-base sm:text-lg text-white text-opacity-80 font-semibold tracking-wide hover:bg-[#458106] transition"
            >
              {/* <LockClosedIcon className="mr-3 w-5 h-5" /> */}
              Place Order
            </button>
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
              alt=""
              className="absolute inset-0 w-full h-full"
            />
            <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-[#125a22] to-[#8dfb95] opacity-75" />
          </div>

          {/* ::Order Summary */}
          <div className="relative">
            {/* :::Item list */}
            <ul className="space-y-5">
              {items.map((item) => (
                <li key={item.id} className="flex justify-between">
                  {/* ::::item infos */}
                  <div className="inline-flex">
                    <img src={item.img} alt="" className="max-h-16" />
                    <div className="ml-3">
                      <p className="text-base text-white font-semibold">
                        {item.name}
                      </p>
                      <p className="text-sm text-white text-opacity-80 font-medium">
                        {item.writer}
                      </p>
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
              +01 23 456 789 <span className="font-light">(International)</span>
            </p>
            <p className="mt-1 text-sm font-semibold">
              +9(876) 543 210 <span className="font-light">(USA / Canada)</span>
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
  );
};

