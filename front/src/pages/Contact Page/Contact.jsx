import { useState } from "react";
import { NavbarLanding } from "../../components/NavbarLanding";
import { Footer } from "../../components/Footer";
export const Contact = () => {
  const [contactInfo, setContactInfo] = useState({
    email: "",
    subject: "",
    message: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setContactInfo((old) => ({ ...old, [name]: value }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(contactInfo);
  }
  return (
    <div className="flex flex-col ">
      <NavbarLanding />
      <section className="bg-white py-10 login-page-bg pt-15 flex justify-center items-center dark:bg-gray-900    overflow-scroll">
        <div className="py-5 lg:py-16 px-4 mx-auto max-w-screen-md bg-white rounded-lg shadow-md">
          <h2 className="mb-4 text-4xl tracking-tight text-center text-primary dark:text-white">
            Contact Us
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Got a technical issue? Want to send feedback about a beta feature?
            Need details about our Business plan? Let us know.
          </p>
          <form action="#" className="space-y-8" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                onChange={handleChange}
                value={contactInfo.email}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                onChange={handleChange}
                value={contactInfo.subject}
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary focus:border-primary "
                placeholder="Let us know how we can help you"
                required=""
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                name="message"
                id="message"
                onChange={handleChange}
                value={contactInfo.message}
                rows={6}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary focus:border-primary"
                placeholder="Leave a comment..."
                defaultValue={""}
                style={{ resize: "none" }}
              />
            </div>
            <button
              type="submit"
              className="py-3  px-5 text-sm font-medium text-center text-white rounded-lg bg-primary sm:w-fit  hover:bg-[#458106] focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
};
