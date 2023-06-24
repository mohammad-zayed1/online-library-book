import { useState } from "react";
// import axios from "axios";
import { Link } from "react-router-dom";

  import { ToastContainer, toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";

export const Register = () => {

  
   const [email, setEmail] = useState("");
   const [isValidEmail, setIsValidEmail] = useState("");

   const [password, setPassword] = useState("");
   const [isValidPassword, setIsValidPassword] = useState("");

   const [phoneNumber, setPhoneNumber] = useState("");
   const [isValidNumber, setIsValidNumber] = useState("");

  const [fullName, setFullName] = useState("");
 
  
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const validateInput = (value, pattern) => {
    const regex = new RegExp(pattern);
    return regex.test(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("====================================");
    console.log(email, password, phoneNumber, fullName);
    console.log("====================================");
    // Perform validation
    const isEmailValid = validateInput(
      email,
      /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/
    );
    const isPasswordValid = validateInput(
      password,
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    );
    const isPhoneNumberValid = validateInput(
      phoneNumber,
      /^(078|079|077)\d{7}$/
    );

    // Do something with the validation results
    if (!isEmailValid) {
      console.log("Invalid email");
      setIsValidEmail(false);
    }

    if (!isPasswordValid) {
      console.log("Invalid password");
      setIsValidPassword(false);
    }

    if (!isPhoneNumberValid) {
      console.log("Invalid phone number");
      setIsValidNumber(false);
    }

    // Update error messages
    setIsValidEmail(
      isEmailValid ? (
        ""
      ) : (
        <ul className="bg-red-200 rounded-lg p-2">
          <li className="text-[12px] font-bold pb-[5px]">
            Email Must Be Like This :
          </li>
          <li className="text-[12px]  pb-[5px] pl-[5px]">- user@user.com</li>
        </ul>
      )
    );
    setIsValidPassword(
      isPasswordValid ? (
        ""
      ) : (
        <ul className="bg-red-200 rounded-lg p-2">
          <li className="text-[12px] font-bold pb-[5px]">
            Your Password Must Include:
          </li>
          <li className="text-[11px]  pb-[5px] pl-[5px]">- At least 8 characters long</li>
          <li className="text-[11px]  pb-[5px] pl-[5px]">
           - Contains at least one lowercase letter
          </li>
          <li className="text-[11px]  pb-[5px] pl-[5px]">
           - Contains at least one uppercase letter
          </li>
          <li className="text-[11px]  pb-[5px] pl-[5px]">- Contains at least one digit</li>
          <li className="text-[11px]  pb-[5px] pl-[5px]">
            - Contains at least one special character (such as @, $, !, %, *, ?,&)
          </li>
        </ul>
      )
    );
    setIsValidNumber(
      isPhoneNumberValid ? (
        ""
      ) : (
        <ul className="bg-red-200 rounded-lg p-2">
          <li className="text-[12px] font-bold pb-[5px]">
            Your Phone Number Must Be Like This:
          </li>
          <li className="text-[11px]  pb-[5px] pl-[5px]">
            - 10 Digits long 
          </li>
          <li className="text-[11px]  pb-[5px] pl-[5px]">
            - Start with 078 | 079 | 077 
          </li>
        </ul>
      )
    );

    
   
  };

  const notify = () => toast("Wow so easy!");
  return (
    <section className="login-page-bg bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Link
          to="/"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img
            className="w-8 h-8 mr-2"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            alt="logo"
          />
          Kitabk
        </Link>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8 border rounded-lg  ">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create and account
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              action="#"
              onSubmit={handleSubmit}
            >
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your full name
                </label>
                <input
                  type="text"
                  name="fullName"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="John Doe"
                  onChange={handleFullNameChange}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  onChange={handleEmailChange}
                  required
                />
              </div>
              {isValidEmail && <p>{isValidEmail}</p>}
              <div>
                <label
                  htmlFor="number"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your phone number
                </label>
                <input
                  type="text"
                  name="pNumber"
                  id="number"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="07••••••••"
                  onChange={handlePhoneNumberChange}
                  required
                />
              </div>
              {isValidNumber && <p>{isValidNumber}</p>}
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={handlePasswordChange}
                  required
                />
              </div>
              {isValidPassword && <p>{isValidPassword}</p>}

              <button
                type="submit"
                onClick={notify}
                className="w-full text-white bg-primary hover:bg-[#458106] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              >
                Create an account
              </button>
              <ToastContainer />

              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
