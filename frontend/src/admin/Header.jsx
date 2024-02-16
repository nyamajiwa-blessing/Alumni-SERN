import React from 'react'
import { IoMdLogOut } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header id="header" className="header fixed-top d-flex align-items-center">

            <div className="d-flex align-items-center justify-content-between">
                <Link to={""} className="logo d-flex align-items-center">
                    <img src="../assets/img/mysvglogo.svg" alt="" />
                    <span className="d-none d-lg-block"> Alumni</span>
                </Link>
                <FaBars className="bi bi-list toggle-sidebar-btn" />
            </div>

            <div className="search-bar">
                <div className="search-form" >
                    <input type="search" placeholder="Search" />
                </div>
            </div>
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
                            <span className="d-none d-md-block dropdown-toggle ps-2">K Anderson</span>
                        </a>

                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                            <li className="dropdown-header">
                                <h6>Kevin</h6>
                                {/* <span>Web Designer</span> */}
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>

                            <li>
                                <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
                                    <CgProfile />
                                    <span className=' ms-1'>My Profile</span>
                                </a>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>

                            <li>
                                <a className="dropdown-item d-flex    align-items-center" href="#">
                                    <IoMdLogOut />
                                    <span className=' ms-1'>Sign Out</span>
                                </a>
                            </li>

                        </ul>
                    </li>

                </ul>
            </nav>

        </header>
    )
}

export default Header