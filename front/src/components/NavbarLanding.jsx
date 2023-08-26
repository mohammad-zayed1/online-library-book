
import { NavLink , Link } from "react-router-dom";
export const NavbarLanding = () => {
  return (
    <div className="navbar bg-white shadow-lg z-10 sticky top-0">
      <div className="navbar-start ">
        <div className="dropdown text-black">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/about">About Us</Link>
            </li>

            <li>
              <Link to="/authors">Authors</Link>
            </li>
            <li>
              <Link to="/quotes">Quotes</Link>
            </li>

            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
        <img src="../../public/logo-2-removebg-preview.png" className="w-[70px] h-[40px]" />
          Kitabk
          </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <li>
            <NavLink to="/about">About Us</NavLink>
          </li>

          <li>
            <NavLink to="/authors">Authors</NavLink>
          </li>
          <li>
            <NavLink to="/quotes">Quotes</NavLink>
          </li>

          <li>
            <NavLink to="/contact">Contact Us</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link
          to="/login"
          className="btn bg-primary border-none outline-none text-white hover:bg-[#458106]"
        >
          Get started
        </Link>
      </div>
    </div>
  );
};
