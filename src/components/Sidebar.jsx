import "flowbite";
import { CSSTransition } from "react-transition-group";

import { useEffect, useState } from "react";
import { FaBook, FaUser, FaFolder } from "react-icons/fa";
import { BookCard } from "../pages/Home Page/BookCard";
import booksData from "../pages/Home Page/Books.json";
import '../pages/Home Page/home.css';
export const Sidebar = () => {
  const [type, setType] = useState("All");
  const handleClick = (event) => {
    setType(event.target.id);
  };

  // window.localStorage.clear()

  // const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
  const [cart, setCart] = useState([]);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [total, setTotal] = useState(0); // Total price state

  // Function to add a product to the cart
  const addToCart = (product) => {
    // Check if the product already exists in the cart
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      // If the product already exists, increase its count
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, count: item.count + 1 } : item
      );
      setCart(updatedCart);
    } else {
      // If the product doesn't exist, add it to the cart with count 1
      setCart([...cart, { ...product, count: 1 }]);
    }

    setShowSuccessMessage(true); // Show the success message
    setTimeout(() => setShowSuccessMessage(false), 3000); // Hide the success message after 3 seconds
  };
  // Function to calculate the total price
  const calculateTotal = () => {
    const totalPrice = cart.reduce(
      (acc, item) => acc + item.price * item.count,0
      
    );
    setTotal(totalPrice);
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));

    calculateTotal(); // Recalculate total price when cart changes
    localStorage.setItem("price", JSON.stringify(total));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);

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
        className="fixed top-[68px] left-0 z-0 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 "
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-neutral dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-white rounded-lg hover:bg-primary "
              >
                <FaUser />
                <span className="ml-3">Profile</span>
              </a>
            </li>

            <li>
              <button
                type="button"
                className="flex items-center w-full p-2 text-white transition duration-75 rounded-lg group hover:bg-gray-100 hover:text-black"
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
              >
                <FaFolder />
                <span className="flex-1 ml-3 text-left whitespace-nowrap">
                  Books categories
                </span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <ul
                id="dropdown-example"
                className="hidden py-2 space-y-2 transition"
              >
                <li>
                  <a
                    onClick={handleClick}
                    href="#"
                    id="All"
                    className="flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 hover:text-black dark:text-white dark:hover:bg-gray-700"
                  >
                    All
                  </a>
                </li>
                <li>
                  <a
                    onClick={handleClick}
                    href="#"
                    id="Fantasy"
                    className="flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 hover:text-black dark:text-white dark:hover:bg-gray-700"
                  >
                    Fantasy
                  </a>
                </li>
                <li>
                  <a
                    onClick={handleClick}
                    href="#"
                    id="Adventure"
                    className="flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 hover:text-black dark:text-white dark:hover:bg-gray-700"
                  >
                    Adventure
                  </a>
                </li>
                <li>
                  <a
                    onClick={handleClick}
                    href="#"
                    id="Romance"
                    className="flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 hover:text-black dark:text-white dark:hover:bg-gray-700"
                  >
                    Romance
                  </a>
                </li>
                <li>
                  <a
                    onClick={handleClick}
                    href="#"
                    id="Historical"
                    className="flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 hover:text-black dark:text-white dark:hover:bg-gray-700"
                  >
                    Historical
                  </a>
                </li>
                <li>
                  <a
                    onClick={handleClick}
                    href="#"
                    id="Cooking"
                    className="flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 hover:text-black dark:text-white dark:hover:bg-gray-700"
                  >
                    Cooking
                  </a>
                </li>
                <li>
                  <a
                    onClick={handleClick}
                    href="#"
                    id="Art & Photography"
                    className="flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 hover:text-black dark:text-white dark:hover:bg-gray-700"
                  >
                    Art & Photography
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-white rounded-lg hover:bg-primary "
              >
                <FaBook />

                <span className="ml-3">My Books</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-white rounded-lg hover:bg-primary "
              >
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                </svg>
                <span className="ml-3">Dashboard</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
      <div className="p-4 sm:ml-64 mt-[60px]">
        <div className="p-4  rounded-lg">
          <div className="grid grid-cols-1 gap-4 mb-4">
            <div className="flex items-center justify-evenly  h-24 rounded bg-info">
              <h1 className="text-2xl text-black font-bold p-2">
                {" "}
                Category : {type}
              </h1>
              <form className="w-[350px]">
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
                    className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-success focus:border-primary"
                    placeholder="Search..."
                    required=""
                  />
                  <button
                    type="submit"
                    className="text-white absolute right-2.5 bottom-2.5 bg-primary hover:bg-[#458106] focus:ring-4 focus:outline-none focus:ring-success font-medium rounded-lg text-sm px-4 py-2 "
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-center items-center  gap-4 ">
            {Books}
            {/* Success message */}
            <CSSTransition
              in={showSuccessMessage}
              timeout={300}
              classNames="success-message"
              unmountOnExit
            >
              <div className="alert alert-success shadow-lg msg">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-current flex-shrink-0 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Added To Cart!</span>
                </div>
              </div>
            </CSSTransition>
          </div>
        </div>
      </div>
    </>
  );
};
