import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';



const Login = () => {
    const [values, setValues] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState(null);

    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        if (location.state && location.state.action === 'navtologin') {
            toast.info("Please Login Now");
        }
        return () => {
            location
        }
    }, [location.state]);


    axios.defaults.withCredentials = true;
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3000/auth/login", values)
            .then((res) => {
                if (res.data.loginStatus) {
                    // navigate("/dashboard")
                    localStorage.setItem("user_id", res.data.userId);
                    localStorage.setItem("user_type", res.data.userType);
                    localStorage.setItem("user_name", res.data.userName);
                    if (res.data.userType === 'admin') {
                        navigate("/dashboard")
                    } else {
                        navigate("/")
                    }
                } else {
                    setErrors(res.data.Error)
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <ToastContainer position="top-center" />

            <header className="masthead">
                <div className="container-fluid h-100">
                    <div className="row h-100 align-items-center justify-content-center text-center">
                        <div className="col-lg-8 align-self-end mb-4 page-title">
                            <h3 className="text-white">Login Account</h3>
                            <hr className="divider my-4" />
                            <div className="col-md-12 mb-2 justify-content-center">
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="container mt-3 pt-2">
                <div className="col-lg-12">
                    <div className="card mb-4">
                        <div className="card-body">
                            <div className="row justify-content-center">
                                <div className="container-fluid col-6">
                                    <form onSubmit={handleSubmit} id="login-frm">
                                        <div className="col form-group justify-content-center">
                                            <div className="form-group">
                                                <label htmlFor="" className="control-label">
                                                    Email
                                                </label>
                                                <input
                                                    onChange={(e) => setValues({ ...values, email: e.target.value })}
                                                    type="email"
                                                    name="username"
                                                    required
                                                    className="form-control"
                                                />
                                            </div>
                                        </div>
                                        <div className="col form-group justify-content-center">
                                            <div className="form-group">
                                                <label htmlFor="" className="control-label">
                                                    Password
                                                </label>
                                                <input
                                                    onChange={(e) => setValues({ ...values, password: e.target.value })}
                                                    type="password"
                                                    name="password"
                                                    required
                                                    className="form-control"
                                                />
                                                <div className='text-danger mt-2'>
                                                    {errors && errors}
                                                </div>
                                                <small className='mt-2'>
                                                    <Link to="/signup" id="new_account">
                                                        Create New Account
                                                    </Link>

                                                </small>
                                            </div>
                                        </div>
                                        {/* <button className="button btn btn-info btn-sm">Login</button> */}
                                        <hr className="divider" />
                                        <div className="row">
                                            <div className="col-md-12 text-center">
                                                <button className="button btn btn-info">Login</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
