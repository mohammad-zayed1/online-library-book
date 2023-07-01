import "flowbite";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
// import { CSSTransition } from "react-transition-group";
import {BiCategoryAlt} from 'react-icons/bi'
import {ImQuotesRight} from 'react-icons/im'
import {HiPencil} from 'react-icons/hi'
import { BookCard } from "../pages/Home Page/BookCard";
import booksData from "../pages/Home Page/Books.json";
import "../pages/Home Page/home.css";
import { CartContext } from "../App";
export const Sidebar = () => {
  const [type, setType] = useState("All");
  const navigate = useNavigate();
  // const [page , setPage] = useState('books')
  const handleClick = (event) => {
    setType(event.target.id);
  };

  const { cart, setCart, total, setTotal, addToCart, calculateTotal } =
    useContext(CartContext);

  const Books = booksData.map((book, index) => (
    <BookCard
      key={index}
      data={{ ...book }}
      product={book}
      addToCart={addToCart}
    />
  ));

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
            <button onClick={()=> navigate('/authors')}
                className="flex items-center w-full gap-1 p-2 text-white transition duration-75 rounded-lg  group hover:bg-white hover:text-primary pl-2   text-[18px]"
                >
                <HiPencil/>
                Authors
              </button>
            </li>
            <li>
              <button onClick={()=> navigate('/quotes')}
                className="flex items-center w-full p-2 gap-2 text-white transition duration-75 rounded-lg  group hover:bg-white hover:text-primary pl-2   text-[18px]"
              >
                <ImQuotesRight/>
                Quotes
              </button>
            </li>
           
            <li>
              <h1
                className="flex items-center w-full p-2 gap-1  text-white transition duration-75 rounded-lg pl-2 group text-[18px]"
              >
                <BiCategoryAlt/>
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
          <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-center items-center  gap-4">
            {Books}
          </div>
        </div>
      </div>
    </>
  );
};
