

export const Quotes = ()=>{
    return (
      <div className="bg-neutral py-[60px]" id="quotes">
        <h2 className="mb-4 text-4xl text-center tracking-tight font-extrabold text-white ">
          Some Quotes For You
        </h2>
        <blockquote className="text-xl rounded-lg bg-[#ffffff63] italic font-semibold text-gray-900 dark:text-white py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <p className="text-white">
            &#34;Flowbite is just awesome. It contains tons of predesigned
            components and pages starting from login screen to complex
            dashboard. Perfect choice for your next SaaS application.&#34;
          </p>
        </blockquote>
      </div>
    );
}