import { useState, createContext, useEffect } from "react";
import { useCookies } from "react-cookie";
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import axios from 'axios';
import { Login } from "./pages/Login Page/Login";
import { Register } from "./pages/Register Page/Register";
import { Landing } from "./pages/Landing Page/Landing";
import "./App.css";
import { Home } from "./pages/Home Page/Home";
import { Hero } from "./pages/Landing Page/Main/Hero-section/Hero";
import { Contact } from "./pages/Contact Page/Contact";
import { Reset } from "./pages/Reset Password/Reset";
import { About } from "./pages/About us Page/About";
import { AuthorsPage } from "./pages/Authors Page/Authors-Page";
import { Checkout } from "./pages/Checkout Page/Checkout";
import { QuotesPage } from "./pages/Quotes Page/QuotesPage";
import { Cart } from "./pages/Cart Page/Cart";
import { Details } from "./pages/Product Details/Details";
import {  toast } from "react-toastify";
import { NotFoundPage } from "./components/NotFoundPage";
import { Profile } from "./pages/Profile-Page/Profile";
export const CartContext = createContext();

function App() {
  // const navigate = useNavigate();
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  const [total, setTotal] = useState(0);
  const [refresh,setRefresh]= useState(true);
  const [count, setCount] = useState(0);
  const[user , setUser] = useState({
    id:"",
    name:"",
    email:"",
    img:"",
  })
  const [orders, setOrders] = useState([]);
  // const[quantity , setQuantity] = useState(0);
  const successMessage = (msg) =>
  toast.success(msg, {
    position: "top-right",
  });

  const [cookies, removeCookie] = useCookies([]);
  useEffect(() => {
    const verifyCookie = async () => {
      
      const { data } = await axios.post(
        "http://localhost:6600",
        {},
        { withCredentials: true }
      );
      
      
      setUser(prev => ({
        ...prev,
        id:data.id,
        name:data.user,
        email:data.email,
      }))
      return true
      
    };
    verifyCookie();
  }, [refresh]);

  // Function to add a product to the cart
  const addToCart = (product) => {
    // Check if the product already exists in the cart
    const existingProduct = cart.find((item) => {
        // setQuantity(product.quantity)
      return item._id === product._id});

    if (existingProduct) {
      // If the product already exists, increase its count
      const updatedCart = cart.map((item) =>
        item._id === product._id ? { ...item, count: item.count + 1 } : item
      );
      setCart(updatedCart);
    } else {
      // If the product doesn't exist, add it to the cart with count 1
      setCart([...cart, { ...product, count: 1 }]);
    }
    // // calculateTotal();
    // calculateTotal();
    // calculateCount();
    successMessage('Book added successfully to the cart')
    setRefresh(!refresh)
  };
  // console.log('quantity : ' , quantity);
  // Function to calculate the total price
  const calculateTotal = () => {
    const totalPrice = cart?.reduce(
      (acc, item) => acc + item.price * item.count,
      0
    );
    setTotal(totalPrice);
  };
 
  const calculateCount = () => {
    const totalProduct = cart?.reduce((acc, item) => acc + item.count, 0);
    setCount(totalProduct);
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    calculateTotal(); // Recalculate total price when cart changes
    calculateCount();
    localStorage.setItem("price", JSON.stringify(total));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart , total , count , refresh]);


  useEffect(() => {
    axios
      .get(`http://localhost:6600/allorders/${user.id}`)
      .then((response) => {
        setOrders(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [user]);



  return (
    <>

<CartContext.Provider value={{cart , setCart , total , setTotal , addToCart , calculateTotal , refresh,setRefresh , user , setUser , orders , setOrders , calculateCount , count } }>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/details/:id" element={<Details />} />

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/hero" element={<Hero />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/about" element={<About />} />
          <Route path="/authors" element={<AuthorsPage />} />
          <Route path="/quotes" element={<QuotesPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
      </CartContext.Provider>
    </>
  );
}

export default App;
