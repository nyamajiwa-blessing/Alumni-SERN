import React from 'react'

const Footer = () => {
    return (
        <>
        {/* <div id="preloader"></div> */}
        <footer className=" py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-center">
                        <h2 className="mt-0 text-white">Contact us</h2>
                        <hr className="divider my-4" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
                        <i className="fas fa-phone fa-3x mb-3 text-muted"></i>
                        <div className="text-black">+923007378823</div>
                    </div>
                    <div className="col-lg-4 mr-auto text-center">
                        <i className="fas fa-envelope fa-3x mb-3 text-muted"></i>
                        <a className="d-block" href="mailto:ranajunaidhashim6@gmail.com">ranajunaidhashim6@gmail.com</a>
                    </div>
                </div>
            </div>
            <br />
            <div className="container"><div className="small text-center text-muted">Copyright © 2024 - Alumni Management System | <a href="https://junaidrana.vercel.app" target="_blank">Portfolio</a></div></div>
        </footer>
        </>
    )
}

export default Footer
