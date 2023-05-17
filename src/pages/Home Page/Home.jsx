

import { Sidebar } from "../../components/Sidebar"
import { NavbarHome } from "../../components/NavbarHome";
export const Home = ()=>{
    return (
      <div className="flex flex-col">
        <NavbarHome />
        <Sidebar />
      </div>
    );
} 