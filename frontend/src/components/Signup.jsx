import React, { useState } from 'react';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const Signup = () => {
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        userType: "",
        // firstName: "",
        // lastName: "",
        // connectedTo: "",
        // avatar: "",
        // status: "",
        // gender: "",
        // batch: "",
        // courseId: "",
    })
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3000/auth/signup", values)
            .then((res) => {
                if (res.data.signupStatus) {
                    toast.success(res.data.message);
                    setTimeout(() => {
                        navigate("/login", { state: { action: "navtologin" } })
                    }, 2000)
                } else {
                    toast.error("An error accurred");
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <ToastContainer position="top-center" hideProgressBar />
            <header className="masthead">
                <div className="container-fluid h-100">
                    <div className="row h-100 align-items-center justify-content-center text-center">
                        <div className="col-lg-8 align-self-end mb-4 page-title">
                            <h3 className="text-white">Create Account</h3>
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
                                <div className="container-fluid col-6 ">
                                    <form onSubmit={handleSubmit} id="create_account">
                                        <div className="col form-group justify-content-center">
                                            <div className="col">
                                                <label htmlFor="" className="control-label">Name</label>
                                                <input onChange={(e) => setValues({ ...values, name: e.target.value })} type="text" className="form-control" name="firstname" required />
                                            </div>
                                            <div className="col mt-2">
                                                <label htmlFor="" className="control-label">Email</label>
                                                <input onChange={(e) => setValues({ ...values, email: e.target.value })} type="email" className="form-control" name="email" required />
                                            </div>
                                        </div>
                                        <div className="col form-group justify-content-center">
                                            <div className="col">
                                                <label htmlFor="" className="control-label">Password</label>
                                                <input onChange={(e) => setValues({ ...values, password: e.target.value })} type="password" className="form-control" name="password" required />
                                            </div>
                                            <div className="col mt-2 ">
                                                <label htmlFor="" className="control-label">User Type</label>
                                                <select onChange={(e) => setValues({ ...values, userType: e.target.value })} className="custom-select" name="userType" required defaultValue="">
                                                    <option value="" disabled>Please select</option>
                                                    <option value="alumnus">Alumnus</option>
                                                    <option value="admin">Admin</option>
                                                </select>

                                            </div>
                                        </div>

                                        <div id="msg">
                                        </div>
                                        <hr className="divider" />
                                        <div className="row">
                                            <div className="col-md-12 text-center">
                                                <button className="button btn btn-info">Create Account</button>
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
    )
}

export default Signup

{/* <div className="row form-group justify-content-center">
                                            <div className="col-md-5">
                                                <label htmlFor="" className="control-label">Gender</label>
                                                <select className="custom-select" name="gender" required>
                                                    <option>Male</option>
                                                    <option>Female</option>
                                                </select>
                                            </div>
                                            <div className="col-md-5">
                                                <label htmlFor="" className="control-label">Batch</label>
                                                <input onChange={(e) => setValues({ ...values, batch: e.target.value })} type="input" className="form-control datepickerY" name="batch" required />
                                            </div>
                                        </div>
                                        <div className="row form-group justify-content-center">
                                            <div className="col-md-5">
                                                <label htmlFor="" className="control-label">Course Graduated</label>
                                                <select className="custom-select select2" name="course_id" required>
                                                    <option></option>
                                                     $course = $conn->query("SELECT * FROM courses order by course asc");
                                                    <option value="<?php echo $row['id'] ?>">course</option>
                                                </select>
                                            </div>
                                            <div className="col-md-5">
                                                <label htmlFor="" className="control-label">Currently Connected To</label>
                                                <textarea onChange={(e) => setValues({ ...values, connectedTo: e.target.value })} name="connected_to" id="" cols="30" rows="3" className="form-control"></textarea>
                                            </div>
                                        </div>
                                        <div className="row" style={{ justifyContent: "space-evenly" }}>
                                            <div className="col-md-5 ">
                                                <label htmlFor="" className="control-label">Image</label>
                                                <input type="file" className="form-control" name="img" />
                                                <img src="" alt="" id="cimg" />
                                            </div>
                                        </div> */}