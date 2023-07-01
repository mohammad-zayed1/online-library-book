
import { BiBookOpen, BiSearch, BiLike, BiCommentDetail } from "react-icons/bi";
import { AiOutlineBell, AiOutlineLock } from "react-icons/ai";

export const Services = () => {
  return (
    <>
      <section className="bg-info  dark:bg-gray-900" id="services">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="max-w-screen-md mb-8 lg:mb-16 mx-auto">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white text-center">
              Our Services
            </h2>
            {/* <p className="text-gray-500 sm:text-xl dark:text-gray-400">
                Here at Flowbite we focus on markets where technology,
                innovation, and capital can unlock long-term value and drive
                economic growth.
              </p> */}
          </div>
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            <div className="bg-white transition hover:translate-x-2 hover:shadow-2xl rounded-lg p-3 shadow-xl hover:border-l-2 hover:border-primary">
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-white text-primary text-2xl lg:h-12 lg:w-12 dark:bg-primary-900 border-2 border-primary">
                <BiBookOpen />
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                Extensive Book Collection
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Gain access to an extensive collection of digital books spanning
                various genres, including fiction, non-fiction, academic
                publications, and more.
              </p>
            </div>
            <div className="bg-white transition hover:translate-x-2 hover:shadow-2xl rounded-lg p-3 shadow-xl hover:border-l-2 hover:border-primary">
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-white text-primary text-2xl lg:h-12 lg:w-12 dark:bg-primary-900 border-2 border-primary">
                <BiSearch />
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                Easy Book Search
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Utilize our user-friendly search function to quickly find
                specific books by title, author, genre, or keywords.
              </p>
            </div>
            <div className="bg-white transition hover:translate-x-2 hover:shadow-2xl rounded-lg p-3 shadow-xl hover:border-l-2 hover:border-primary">
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-white text-primary text-2xl lg:h-12 lg:w-12 dark:bg-primary-900 border-2 border-primary">
                <BiLike />
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                Reading Formats
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Enjoy flexibility with multiple reading formats, including
                downloadable e-books, e-readers, and audiobooks, to accommodate
                different preferences.
              </p>
            </div>
            <div className="bg-white transition hover:translate-x-2 hover:shadow-2xl rounded-lg p-3 shadow-xl hover:border-l-2 hover:border-primary">
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-white text-primary text-2xl lg:h-12 lg:w-12 dark:bg-primary-900 border-2 border-primary">
                <AiOutlineBell />
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                Notifications and Reminders
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Receive notifications for due dates, reservation availability,
                and recommended books to stay up to date with your reading
                choices.
              </p>
            </div>
            <div className="bg-white transition hover:translate-x-2 hover:shadow-2xl rounded-lg p-3 shadow-xl hover:border-l-2 hover:border-primary">
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-white text-primary text-2xl lg:h-12 lg:w-12 dark:bg-primary-900 border-2 border-primary">
                <AiOutlineLock />
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                Data Security and Privacy
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Rest assured that your personal information and reading history
                are kept secure and treated with the utmost privacy.
              </p>
            </div>
            <div className="bg-white transition hover:translate-x-2 hover:shadow-2xl rounded-lg p-3 shadow-xl hover:border-l-2 hover:border-primary">
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-white text-primary text-2xl lg:h-12 lg:w-12 dark:bg-primary-900 border-2 border-primary">
                <BiCommentDetail />
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                Reviews and Ratings
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Explore reviews and ratings from other readers to help you
                discover new books and make informed choices.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
