/* eslint-disable react/prop-types */

import { useState } from "react";
import books from "./Books.json";

export const BookCard = ({data , product , addToCart}) => {
//   const [item, setItem] = useState("");


// const [items, setItems] = useState([]);


// // const handleAddToCart = (product) => {
// //    setItems([...items , product])
   
// // };

// console.log(items)


  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:shadow-2xl hover:border-2 hover:border-solid hover:border-success transition ">
      <a href="#" className="flex justify-center">
        <img className="p-8 rounded-t-lg" src={data.img} alt="product image" />
      </a>
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {data.name}
          </h5>
        </a>
        <div className="flex items-center mt-2.5 mb-5">
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
            Rating : {data.rate} / 5
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            ${data.price}
          </span>
          <button
            id={data.id}
            onClick={() => addToCart(product)}
            className="text-white bg-primary hover:bg-[#458106] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};
