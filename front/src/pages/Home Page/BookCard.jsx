/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";
import axios from "axios";
// import books from "./Books.json";
import { useNavigate } from "react-router-dom";
import { Loader } from "../../components/Loader";

import {BsBagPlus} from 'react-icons/bs'
import {GoInfo} from 'react-icons/go'

export const BookCard = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:6600/allproducts")
      .then((response) => {
        setProducts(response.data);
      })
      .then(() => {
        setLoader(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/details/${id}`);
  };

  console.log("products", products);
  const items = products.map((product) => {
    let length = product.ratings;
  let length2 = 5 - length;
  const loopArray = Array.from({ length });
  const loopArray2 = Array.from({ length: length2 });
  // Use map() on the created array
  const fillStar = loopArray.map((_, index) => {
    // Perform any desired operations within the loop
    return (
      <svg
        key={index}
        className="h-5 w-5 text-yellow-400"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    );
  });
  const unFillStar = loopArray2.map((_, index) => {
    // Perform any desired operations within the loop
    return (
      <svg
        key={index}
        className="h-5 w-5 text-gray-200"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    );
  });
    return (
      <div
        key={product._id}
        className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:shadow-2xl hover:border-2 hover:border-solid hover:border-success transition "
      >
        <a href="#" className="flex justify-center">
          <img
            className="p-8 rounded-t-lg"
            src="https://th.bing.com/th/id/OIP.AuKe45hzeut0bmsMuslmQQDuEs?w=143&h=180&c=7&r=0&o=5&pid=1.7"
            alt="product image"
          />
        </a>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {product.name}
            </h5>
          </a>
          <div className="flex items-center mt-2.5 mb-5">
            <span className="flex text-blue-800 text-xs font-semibold mr-2  py-0.5 rounde ">
              {fillStar}
              {unFillStar}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              ${product.price}
            </span>
            {product.quantity > 0 ? (
              <div className="flex gap-1">
                <button
                  id={product._id}
                  data-tip="Details"
                  className="text-white tooltip bg-neutral hover:bg-[#222353] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={() => handleClick(product._id)}
                >
                  <GoInfo className="text-white font-bold text-xl"/>
                </button>
                <button
                  id={product._id}
                  data-tip="Add to Cart"
                  onClick={() => addToCart(product)}
                  className="text-white tooltip tooltip-primary  bg-primary hover:bg-[#458106] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <BsBagPlus className="text-white font-bold text-xl"/>
                </button>
              </div>
            ) : (
              <div className="text-xl">Out of The Stock</div>
            )}
          </div>
        </div>
      </div>
    );
  });
  return <>{loader ? <Loader /> : items}</>;
};
