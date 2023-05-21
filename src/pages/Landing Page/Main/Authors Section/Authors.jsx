



export const  Authors = ()=>{
    return (
      <section className="bg-white dark:bg-gray-900" id="authors">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
          <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Best Authors
            </h2>
            {/* <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
              Explore the whole collection of open-source web components and
              elements built with the utility classes from Tailwind
            </p> */}
          </div>
          <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-3">
            <div className="items-center hover:translate-y-[-5px] transition hover:shadow-2xl  bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/ErnestHemingway.jpg/220px-ErnestHemingway.jpg"
                  alt="Bonnie Avatar"
                />
              </a>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="https://en.wikipedia.org/wiki/Ernest_Hemingway">
                    Ernest Hemingway
                  </a>
                </h3>
                <span className="text-gray-500 dark:text-gray-400">
                   author and journalist
                </span>
                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                  His glorious contribution in the field fetched him the Nobel
                  Prize of Literature in 1954.
                </p>
                <div className="w-full text-right">
                  <a
                    className="hover:underline hover:text-primary"
                    href="https://en.wikipedia.org/wiki/J._K._Rowling"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="items-center hover:translate-y-[-5px] transition hover:shadow-2xl  bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/J._K._Rowling_2010.jpg/220px-J._K._Rowling_2010.jpg"
                  alt="Jese Avatar"
                />
              </a>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="https://en.wikipedia.org/wiki/J._K._Rowling">
                    J. K. Rowling
                  </a>
                </h3>
                <span className="text-gray-500 dark:text-gray-400">
                  Author & philanthropist
                </span>
                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                  J. K. Rowling, is a British author and philanthropist. She
                  wrote Harry Potter.
                </p>
                <div className="w-full text-right">
                  <a
                    className="hover:underline hover:text-primary"
                    href="https://en.wikipedia.org/wiki/J._K._Rowling"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="items-center hover:translate-y-[-5px] transition hover:shadow-2xl  bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <a href="https://en.wikipedia.org/wiki/William_Shakespeare">
                <img
                  className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Shakespeare.jpg/220px-Shakespeare.jpg"
                  alt="Michael Avatar"
                />
              </a>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="https://en.wikipedia.org/wiki/William_Shakespeare">
                    William Shakespeare
                  </a>
                </h3>
                <span className="text-gray-500 dark:text-gray-400">
                  Playwright, poet, actor
                </span>
                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                  Michael drives the technical strategy of the flowbite platform
                  and brand.
                </p>
                <div className="w-full text-right">
                  <a
                    className="hover:underline hover:text-primary"
                    href="https://en.wikipedia.org/wiki/William_Shakespeare"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="items-center hover:translate-y-[-5px] transition hover:shadow-2xl  bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <a href="https://en.wikipedia.org/wiki/George_Orwell">
                <img
                  className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/George_Orwell_press_photo.jpg/220px-George_Orwell_press_photo.jpg"
                  alt="Sofia Avatar"
                />
              </a>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="https://en.wikipedia.org/wiki/George_Orwell">
                    George Orwell
                  </a>
                </h3>
                <span className="text-gray-500 dark:text-gray-400">
                  Novelist, essayist, journalist
                </span>
                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                  His most famous works as a write include “Animal Farm”,
                  “Homage to Catalonia” and “Nineteen Eighty Four Essays”.
                </p>
                <div className="w-full text-right">
                  <a
                    className="hover:underline hover:text-primary"
                    href="https://en.wikipedia.org/wiki/George_Orwell"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="items-center hover:translate-y-[-5px] transition hover:shadow-2xl  bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <a href="https://en.wikipedia.org/wiki/Charles_Dickens">
                <img
                  className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Dickens_Gurney_head.jpg/220px-Dickens_Gurney_head.jpg"
                  alt="Sofia Avatar"
                />
              </a>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="https://en.wikipedia.org/wiki/Charles_Dickens">
                    Charles Dickens
                  </a>
                </h3>
                <span className="text-gray-500 dark:text-gray-400">Writer</span>
                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                  Featuring next on the list of top 10 writers in the world is
                  the popular English writer, Charles Dickens.
                </p>
                <div className="w-full text-right">
                  <a
                    className="hover:underline hover:text-primary"
                    href="https://en.wikipedia.org/wiki/Charles_Dickens"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="items-center hover:translate-y-[-5px] transition hover:shadow-2xl  bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <a href="https://en.wikipedia.org/wiki/Leo_Tolstoy">
                <img
                  className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/L.N.Tolstoy_Prokudin-Gorsky.jpg/220px-L.N.Tolstoy_Prokudin-Gorsky.jpg"
                  alt="Sofia Avatar"
                />
              </a>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="https://en.wikipedia.org/wiki/Leo_Tolstoy">
                    Leo Tolstoy
                  </a>
                </h3>
                <span className="text-gray-500 dark:text-gray-400">
                  Writer, religious thinker
                </span>
                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                  One of the best writers in the world is Leo Tolstoy, who was
                  born in Russia in 1828.
                </p>
                <div className="w-full text-right">
                  <a
                    className="hover:underline hover:text-primary"
                    href="https://en.wikipedia.org/wiki/Leo_Tolstoy"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}