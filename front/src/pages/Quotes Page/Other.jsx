/* eslint-disable no-undef */

import quotes from "./quotes.json";

export const Other = () => {
  const other = quotes
    .filter((item) => item.list === "other")
    .map((quote, index) => {
      return (
        <div
          key={index}
          className="items-center border-l-4 border-solid border-primary hover:translate-y-[-5px] transition hover:shadow-2xl  hover:border-r-4 hover:border-neutral  bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700"
        >
          <div className="p-5 w-full">
            <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
              {quote.quote}
            </p>
            <div className="w-full text-right">{quote.name}</div>
          </div>
        </div>
      );
    });

  return (
    <section className="bg-white background-cover-img" id="authors">
      <div className=" py-8 px-4 mx-auto max-w-screen-xl lg:py-8 lg:px-6  ">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Other Quotes For You
          </h2>
        </div>
        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">{other}</div>
      </div>
    </section>
  );
};
