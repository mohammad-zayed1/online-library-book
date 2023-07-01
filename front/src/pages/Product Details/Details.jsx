import { NavbarHome } from "../../components/NavbarHome";
import { Footer } from "../../components/Footer";
import { useEffect, useState , useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCookies } from "react-cookie";

import { BsFillPersonFill } from "react-icons/bs";
import { BiCategoryAlt } from "react-icons/bi";
import axios from "axios";
import { ToastContainer} from "react-toastify";
import { CartContext } from "../../App";
export const Details = () => {
  const { id } = useParams();

  const {cart , setCart , total , setTotal , addToCart , calculateTotal , refresh} = useContext(CartContext);

  const [product, setProduct] = useState({});
  const [showMore, setShowMore] = useState(false);
  
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");
  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate("/login");
      }
      const { data } = await axios.post(
        "http://localhost:6600",
        {},
        { withCredentials: true }
      );
      const { status, user } = data;
      setUsername(user);
      return status ? "" : (removeCookie("token"), navigate("/login"));
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);

  useEffect(() => {
    axios
      .get(`http://localhost:6600/productDetails/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    });



  const Logout = () => {
    removeCookie("token");
    navigate("/login");
  };


  // fill stars

  let length = product.ratings;
  let length2 = 5 - length;
  const loopArray = Array.from({ length });
  const loopArray2 = Array.from({ length: length2 });
  // Use map() on the created array
  const fillStar = loopArray.map((_, index) => {
    // Perform any desired operations within the loop
    return (
      <svg
        key={index}
        className="h-5 w-5 text-yellow-400"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    );
  });
  const unFillStar = loopArray2.map((_, index) => {
    // Perform any desired operations within the loop
    return (
      <svg
        key={index}
        className="h-5 w-5 text-gray-200"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    );
  });

  return (
    <>
      <NavbarHome logout={Logout} />
      <section className="mt-[70px] mb-[20px]">
        <div className="relative mx-auto max-w-screen-xl px-4 py-8">
          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
              <img
                alt="Les Paul"
                src="https://img.freepik.com/free-psd/book-hardcover-mockup-three-views_125540-226.jpg?w=740&t=st=1687785528~exp=1687786128~hmac=d1ea2efd4ac6b7b9fde13365568366d8da44155b1baa0e568275d7e3d81638d2"
                className="aspect-square w-full rounded-xl object-cover"
              />

            </div>

            <div className="sticky top-0">
              <div className="mt-8 flex justify-between">
                <div className="max-w-[35ch] space-y-2">
                  <h1 className="text-xl font-bold sm:text-2xl">
                    {product.name}
                  </h1>

                  <div className="my-4">
                    <div className="prose max-w-none">
                      {!showMore && (
                        <div className=" lg:w-[700px] truncate">
                          {" "}
                          {product.description}{" "}
                        </div>
                      )}
                      {showMore && <p className="lg:w-[700px]">{product.description}</p>}
                    </div>

                    {!showMore && (
                      <button
                        onClick={() => setShowMore(!showMore)}
                        className="mt-2 text-sm font-medium underline hover:text-primary"
                      >
                        Read More
                      </button>
                    )}
                    {showMore && (
                      <button
                        onClick={() => setShowMore(!showMore)}
                        className="mt-2 text-sm font-medium underline hover:text-primary"
                      >
                        Show Less
                      </button>
                    )}
                  </div>

                  <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                      {" "}
                      <BsFillPersonFill className="text-primary" /> By:{" "}
                      {product.author}{" "}
                    </div>
                    <div className="flex items-center gap-2">
                      {" "}
                      <BiCategoryAlt className="text-primary" /> Category:{" "}
                      {product.category}{" "}
                    </div>
                  </div>

                  <div className="-ms-0.5 flex">
                    {fillStar}
                    {unFillStar}
                  </div>
                </div>

                <p className="text-lg font-bold">${product.price}</p>
              </div>

             
                <div className="mt-8 flex gap-4">
                  <button
                  onClick={()=> addToCart(product)}
                    
                    className="block btn btn-primary rounded  px-5 py-3 text-xs font-medium text-white "
                  >
                    Add to Cart
                  </button>
                </div>
            
            </div>
          </div>
        </div>
      <ToastContainer/>
      </section>
      <Footer />
    </>
  );
};
