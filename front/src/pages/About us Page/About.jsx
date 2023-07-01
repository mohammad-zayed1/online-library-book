import { NavbarLanding } from "../../components/NavbarLanding"
import { Footer } from "../../components/Footer"

export const About = () => {
  return (
    <>
      <NavbarLanding />
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
              About Us
            </h1>
            <p className="font-normal text-base leading-6 text-gray-600 ">
              Welcome to our online bookstore! We are passionate about books and
              dedicated to providing book lovers with a convenient and enjoyable
              shopping experience. With a vast collection of titles across
              various genres, we strive to be your go-to destination for all
              your reading needs. At our online store, you will discover a
              carefully curated selection of both timeless classics and
              contemporary bestsellers. We believe in the power of literature to
              inspire, entertain, and educate, and we are committed to bringing
              you the finest literary works from acclaimed authors around the
              world.
            </p>
          </div>
          <div className="w-full lg:w-8/12 ">
            <img
              className="w-full h-full"
              src="https://i.ibb.co/FhgPJt8/Rectangle-116.png"
              alt="A group of People"
            />
          </div>
        </div>

       
      </div>
      <Footer />
    </>
  );
};
