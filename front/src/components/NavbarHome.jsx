/* eslint-disable react/prop-types */

import { useContext } from "react";
import img from "../assets/img/user.png";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../App";
export const NavbarHome = (props) => {

  const navigate = useNavigate();

  const { total, count } = useContext(CartContext);

 

  return (
    <div className="navbar bg-base-100 fixed top-0  z-20 shadow-md">
      <div className="flex-1">
        <Link to="/home" className="btn btn-ghost normal-case text-xl">
          <img src="../../public/logo-2-removebg-preview.png" className="w-[70px] h-[40px]" />
          Kitabk
        </Link>
      </div>
      <div className="flex-none mx-8 gap-5">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">{count}</span>
            </div>
          </label>
          <div
            tabIndex={0}
            className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div className="card-body">
              <span className="font-bold text-lg">Total Items : {count}</span>
              <span className="text-black">Subtotal: ${total}</span>
              <div className="card-actions">
                <button
                  onClick={() => navigate("/cart")}
                  className="btn btn-primary btn-block"
                >
                  View cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={img} />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/profile" className="justify-between">
                Profile
                {/* <span className="badge">New</span> */}
              </Link>
            </li>

            <li>
              <button onClick={props.logout}>Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
