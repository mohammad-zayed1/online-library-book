/* eslint-disable react/prop-types */
import "flowbite";
import { CartContext } from "../App";
import { useEffect, useState, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
// import { CSSTransition } from "react-transition-group";
import { BiCategoryAlt } from "react-icons/bi";
import { ImQuotesRight } from "react-icons/im";
import { HiPencil } from "react-icons/hi";
import { BookCard } from "../pages/Home Page/BookCard";
import booksData from "../pages/Home Page/Books.json";
import { Loader } from "./Loader";

import {BsBagPlus} from 'react-icons/bs'
import {GoInfo} from 'react-icons/go'
import "../pages/Home Page/home.css";
import Pagination from "./Pagination";
import "../utils/pagination.css";
import axios from 'axios'

let PageSize = 8;
// let PageSize = 4;
export const Sidebar = () => {
  const [type, setType] = useState("All");
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(true);
  const navigate = useNavigate();
  // const [page , setPage] = useState('books')
  const handleClick = (event) => {
    setType(event.target.id);
  };

  const { cart, setCart, total, setTotal, addToCart, calculateTotal } =
    useContext(CartContext);

    useEffect(() => {
      axios
        .get("http://localhost:6600/allproducts")
        .then((response) => {
          setProducts(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }, []);

  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return products.slice(firstPageIndex, lastPageIndex);
  }, [currentPage , products]);

  const Books = currentTableData.map((product, index) => {
    // <BookCard
    //   key={index}
    //   data={{ ...book }}
    //   product={book}
    //   addToCart={addToCart}
    // />
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
console.log("books" , Books);
  return (
    <>
      <button
        data-drawer-target="sidebar-multi-level-sidebar"
        data-drawer-toggle="sidebar-multi-level-sidebar"
        aria-controls="sidebar-multi-level-sidebar"
        type="button"
        className="inline-block items-center p-2 mt-[75px] ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          />
        </svg>
      </button>

      <aside
        id="sidebar-multi-level-sidebar"
        className="fixed top-[65px] left-0 z-50 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 "
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-primary shadow-2xl z-[50] ">
          <ul className="space-y-2 font-medium">
            <li>
              <button
                onClick={() => navigate("/authors")}
                className="flex items-center w-full gap-1 p-2 text-white transition duration-75 rounded-lg  group hover:bg-white hover:text-primary pl-2   text-[18px]"
              >
                <HiPencil />
                Authors
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/quotes")}
                className="flex items-center w-full p-2 gap-2 text-white transition duration-75 rounded-lg  group hover:bg-white hover:text-primary pl-2   text-[18px]"
              >
                <ImQuotesRight />
                Quotes
              </button>
            </li>

            <li>
              <h1 className="flex items-center w-full p-2 gap-1  text-white transition duration-75 rounded-lg pl-2 group text-[18px]">
                <BiCategoryAlt />
                Categories
              </h1>
            </li>
            <li>
              <button
                onClick={handleClick}
                id="All"
                className="flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-5 group hover:bg-white hover:text-primary"
              >
                All
              </button>
            </li>
            <li>
              <button
                onClick={handleClick}
                id="Fantasy"
                className="flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-5 group hover:bg-white hover:text-primary"
              >
                Fantasy
              </button>
            </li>
            <li>
              <button
                onClick={handleClick}
                id="Adventure"
                className="flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-5 group hover:bg-white hover:text-primary"
              >
                Adventure
              </button>
            </li>
            <li>
              <button
                onClick={handleClick}
                id="Romance"
                className="flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-5 group hover:bg-white hover:text-primary"
              >
                Romance
              </button>
            </li>
            <li>
              <button
                onClick={handleClick}
                id="Historical"
                className="flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-5 group hover:bg-white hover:text-primary"
              >
                Historical
              </button>
            </li>
            <li>
              <button
                onClick={handleClick}
                id="Cooking"
                className="flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-5 group hover:bg-white hover:text-primary"
              >
                Cooking
              </button>
            </li>
            <li>
              <button
                onClick={handleClick}
                id="Art & Photography"
                className="flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-5 group hover:bg-white hover:text-primary"
              >
                Art & Photography
              </button>
            </li>
          </ul>
        </div>
      </aside>
      <div className="p-4 sm:ml-64 mt-[60px]">
        <div className="p-4  rounded-lg">
          <div className="grid grid-cols-1 gap-4 mb-4">
            <div className="flex items-center justify-evenly  h-24 rounded ">
              <form className="w-96">
                <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-success focus:border-primary"
                    placeholder="Search..."
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="flex flex-col w-full">
            <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-center items-center  gap-4">
              {Books}
            </div>
            <Pagination
              className="pagination-bar mt-5 self-center"
              currentPage={currentPage}
              totalCount={products.length}
              pageSize={PageSize}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </div>
        </div>
      </div>
    </>
  );
};
