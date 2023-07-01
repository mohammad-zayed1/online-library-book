import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import { NavbarLanding } from "../../components/NavbarLanding"
import { Footer } from "../../components/Footer"
import { Main } from "./Main/Main"
export const Landing =()=>{
  
    return(
        <>
        <NavbarLanding/>
        <Main/>
        <Footer/>
        </>
    )
}