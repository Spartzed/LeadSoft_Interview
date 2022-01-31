import React, { useEffect,useContext, useState} from "react";
import Sidebar from "../../componets/sidebar/Sidebar";
import Navbar from "../../componets/navbar/Navbar";
import Main from "../../componets/main/Main";
import "../../index.css";


const HomePage = () => {

    const [sidebarOpen, setSideBarOpen] = useState(false);
    const openSideBar = () => {
        setSideBarOpen(true);
    }
    const closeSideBar = () => {
        setSideBarOpen(false);
    }

    return (
        <div className="container">
            <Navbar sidebarOpen={openSideBar} closeSideBar={closeSideBar}/>
            <Main/>
            <Sidebar sidebarOpen={openSideBar} closeSideBar={closeSideBar}/>
        </div>

    );
};

export default HomePage