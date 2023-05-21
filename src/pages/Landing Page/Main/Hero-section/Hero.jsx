
export const Hero = () => {
  return (
    <section className="bg-neutral dark:bg-gray-900 " id="home">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl text-white font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            There is no friend as loyal as a Book!
          </h1>
          <p className="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            &#34; I have always imagined that paradise will be a kind of
            library. &#34; - Jorge Luis Borges
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary hover:bg-[#458106] focus:ring-4 focus:ring-primary hover:translate-y-[-5px] transition-[0.3s]"
          >
            Get started
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex ">
          <img
          className="rounded-lg"
            src="https://images.unsplash.com/photo-1531988042231-d39a9cc12a9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJvb2tzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            alt="mockup"
          />
        </div>
      </div>
    </section>
  );
};
