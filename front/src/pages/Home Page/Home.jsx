
import { useEffect, useState , useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import { Sidebar } from "../../components/Sidebar"
import { NavbarHome } from "../../components/NavbarHome";

import { CartContext } from "../../App";


export const Home = ()=>{
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [userData, setUserData] = useState({
    id:"",
    name:"",
    email:"",
    status:"",
  });

  const {user , setUser} = useContext(CartContext)
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
      setUserData(data);
      // setUser(prev => ({
      //   ...prev,
      //   id:data.id,
      //   name:data.user,
      //   email:data.email,
      // }))
      return status
      ? 
      toast(`Hello ${user}`, {
        position: "top-right",
      })
      : (removeCookie("token"), navigate("/login"));
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);
  console.log("userData" , userData );
  console.log('user' , user)
  const Logout = () => {
    removeCookie("token");
    navigate("/login");
  };
    return (
      <div className="flex flex-col">
        <NavbarHome logout = {Logout}/>
        <Sidebar />
        <ToastContainer />
      </div>
    );
} 