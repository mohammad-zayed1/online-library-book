import { useState, useContext } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { Footer } from "../../components/Footer";
import { NavbarHome } from "../../components/NavbarHome";
import { RiEditBoxFill } from "react-icons/ri";
import { MdOutlineCancel } from "react-icons/md";
import { CartContext } from "../../App";
import { ToastContainer, toast } from "react-toastify";
import { TableOfOrders } from "./TableOfOrders";

import userImg from "../../assets/img/user.png";
export const Profile = () => {
  const [, removeCookie] = useCookies([]);
  const navigate = useNavigate();

  const { user, setRefresh, refresh } = useContext(CartContext);
  const [show, setShow] = useState(false);
  const [updateUser, setUpdateUser] = useState({
    name: user.name,
  });
  console.log("updateUser", updateUser);
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "top-right",
    });
  const handleError = (err) =>
    toast.error(err, {
      position: "top-right",
    });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdateUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const Logout = () => {
    removeCookie("token");
    navigate("/login");
  };
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      await axios.patch(
        `http://localhost:6600/updateuser/${user.id}`,
        updateUser
      );
      setRefresh(!refresh);

      handleSuccess("user info updated successfully");
      setShow(false);
    } catch (err) {
      console.error(err.message);
      handleError(err.message);
    }
  };

  return (
    <div className="flex flex-col h-screen login-page-bg">
      <NavbarHome logout={Logout} />
      <div className="grow mt-28 mb-10  flex flex-col justify-center items-center">
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col items-center py-10">
            <img
              className="w-24 h-24 mb-3 rounded-full shadow-lg"
              src={userImg}
              alt="Bonnie image"
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              {user.name}
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {user.email}
            </span>
            <div className="flex mt-4 space-x-3 md:mt-6">
              {!show ? (
                <button
                  onClick={() => {
                    setShow(!show);
                  }}
                  data-tip="edit"
                  className="flex gap-1 tooltip tooltip-primary  items-center px-4 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-[#488a03] "
                >
                  <RiEditBoxFill className="text-lg" />
                </button>
              ) : (
                <button
                  data-tip="cancel"
                  onClick={() => {
                    setShow(!show);
                  }}
                  className="flex gap-1 tooltip tooltip-error items-center px-4 py-2 text-sm font-medium text-center  bg-error rounded-lg   "
                >
                  <MdOutlineCancel className="text-lg text-red-500" />
                </button>
              )}
            </div>
            {show && (
              <form
                onSubmit={handleSubmit}
                method="dialog"
                className="modal-box"
              >
                <div className="grid grid-cols-1  gap-4 ">
                  {/*  */}
                  <div className="form-control w-full max-w-xs mx-auto">
                    <label className="label">
                      <span className="label-text">Username</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Type here"
                      className="input input-sm  border-[#529b03] w-full max-w-xs"
                      value={updateUser.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-control w-full max-w-xs mx-auto">
                    <button type="submit" className="btn btn-sm btn-primary">
                      update
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
        <TableOfOrders userId={user.id} />
      </div>
      <ToastContainer />
      <Footer />
    </div>
  );
};
