import './Sidebar.css';
import logo from '../../assets/logo.jpg'
import { AuthContext } from "../../contexts/auth";
import React, {useContext} from "react";



const Sidebar = ({ sidebarOpen,closeSideBar }) => {

    const { logout } = useContext(AuthContext)
    const DoLogout = () =>{
        logout();
    };
    return (
        <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
            <div className="sidebar__title">
                <div className="sidebar__img">
                    <img src={logo} alt="logo" />
                    <h1>LeadSoft</h1>
                </div>
                <i 
                onClick={() => closeSideBar()}
                className='fa fa-times'
                id='sidebarIcon'
                ></i>
            </div>
            <div className="sidebar__menu">
                <div className="sidebar__link active_menu_link">
                    <i className="fa fa-minus-square"></i>
                    <a href="#">Home</a>
                </div>
                <h2>Administador</h2>
                <div className="sidebar__link">
                    <i className="fa fa-tachometer"></i>
                    <a href="#">Àrea administrativa</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-male"></i>
                    <a href="#">Usuarios</a>
                </div>

                <div className="sidebar__logout">
                    <i className='fa fa-power-off' onClick={DoLogout}></i>
                    <a onClick={DoLogout}>Logout</a>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;