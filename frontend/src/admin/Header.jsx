import React, { useEffect, useState } from 'react'
import { IoMdLogOut } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import logo from "../assets/uploads/logo.png";
import { useAuth } from '../AuthContext';
import axios from 'axios';

const Header = () => {
    const { logout, isLoggedIn, isAdmin } = useAuth();
    const [name, setName] = useState();
    const navigate = useNavigate();

    const handleLogout = () => {
        console.log("love");
        axios.post("http://localhost:3000/auth/logout")
            .then((res) => {
                navigate("/", { state: { action: "homelogout" } })
                localStorage.clear();
                logout();
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        const user_name = localStorage.getItem("user_name");
        setName(user_name);
    }, []);

    return (
        <header id="header" className="header fixed-top d-flex align-items-center">

            <div className="d-flex align-items-center justify-content-between">
                <Link to={"/"} className="logo d-flex align-items-center">
                    <img src={logo} alt="" />
                    <span className="d-none d-lg-block"> Dashboard</span>
                </Link>
                <FaBars className="bi bi-list toggle-sidebar-btn" />
            </div>

            {/* <div className="search-bar">
                <div className="search-form" >
                    <input type="search" placeholder="Search" />
                </div>
            </div> */}
            <nav className="header-nav ms-auto">
                <ul className="d-flex align-items-center">

                    <li className="nav-item d-block d-lg-none">
                        <a className="nav-link nav-icon search-bar-toggle " href="#">
                            <FaSearch />
                        </a>
                    </li>

                    <li className="nav-item dropdown pe-3">

                        <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
                            {/* <img src="assets/img/profile-img.jpg" alt="Profile" className="rounded-circle" /> */}
                            <span className="d-none d-md-block dropdown-toggle ps-2">{name}</span>
                        </a>

                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                            <li className="dropdown-header">
                                <h6>{name}</h6>
                                {/* <span>Web Designer</span> */}
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>

                            <li>
                                <Link className="dropdown-item d-flex align-items-center" href="users-profile.html">
                                    <CgProfile />
                                    <span className=' ms-1'>My Profile</span>
                                </Link>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>

                            <li>
                                <button className="dropdown-item d-flex align-items-center" >
                                    <IoMdLogOut />
                                    <span className=' ms-1' onClick={handleLogout} >Sign Out</span>
                                </button>
                            </li>

                        </ul>
                    </li>

                </ul>
            </nav>

        </header>
    )
}

export default Header