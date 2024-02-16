import React, { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
                <div className="container">
                    <a className="navbar-brand js-scroll-trigger" href="/">Alumni</a>
                    <button className="navbar-toggler" type="button" onClick={toggleMenu}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarResponsive">
                        <ul className="navbar-nav ml-auto my-2 my-lg-0">
                            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/">Home</a></li>
                            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/">Alumni</a></li>
                            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/">Gallery</a></li>
                            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/">Jobs</a></li>
                            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/">Forums</a></li>
                            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/">About</a></li>
                            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/" id="login">Login</a></li>
                            <li className="nav-item">
                                <div className="dropdown mr-4">
                                    <a href="/" className="nav-link js-scroll-trigger" id="account_settings" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        name<i className="fa fa-angle-down"></i>
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="account_settings" style={{ left: "-2.5em" }}>
                                        <a className="dropdown-item" href="/" id="manage_my_account"><i className="fa fa-cog"></i> Manage Account</a>
                                        <a className="dropdown-item" href="/"><i className="fa fa-power-off"></i> Logout</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;
