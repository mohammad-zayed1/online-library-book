import { Link } from "react-router-dom";
import { useState } from "react";

export const Reset = () => {
  const [ResetData, setResetData] = useState({
    email: "",
  });

  const [isEmpty, setIsEmpty] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setResetData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(ResetData);
    const { email } = ResetData;

    if (!email) {
      setIsEmpty(true);
      return;
    } else {
      setIsEmpty(false);
    }
  };
  return (
    <div className="login-page-bg">
      <div className="login-register-box md:container md:mx-auto flex justify-center items-center flex-col h-screen">
        <h1 className="text-4xl p-3 mb-3 ">Ops!</h1>
        <div
          className="form-box w-2/5 flex justify-center items-center flex-col rounded-md bg-white p-5"
          style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
        >
          <div className="text-2xl p-3 mb-3">Reset Your Password </div>

          <form
            onSubmit={handleSubmit}
            className=" w-full flex justify-center items-center flex-col px-3 py-1 gap-4"
          >
            <p className="text-center text-[18px]">
              Enter the email address associated with your account and we will
              send you a link to reset your password{" "}
            </p>
            <label htmlFor="email" className="w-[100%] flex flex-col  gap-1">
              <div className="w-[100%] flex justify-between items-center mb-1">
                <span className="px-1 text-[18px]">Email</span>
                {isEmpty && (
                  <span className="bg-error text-red-500 p-1 rounded-md text-xs">
                    required
                  </span>
                )}
              </div>
              <input
                type="text"
                placeholder="Type Email here"
                className={`input input-bordered input-info w-full ${
                  isEmpty ? "border-red-500" : ""
                }`}
                name="email"
                onChange={handleChange}
                value={ResetData.email}
              />
            </label>

            <button className="btn btn-primary w-4/5 text-white mt-2">
              Continue
            </button>
          </form>
          <div className="mt-3">
            Not A Member ? {/* <Link to="/register" >Sign Up</Link> */}
            <Link to="/register" className="underline text-primary font-bold">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
