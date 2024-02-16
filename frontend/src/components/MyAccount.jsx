import React from 'react'

const MyAccount = () => {
  return (
<>
<header className="masthead">
            <div className="container-fluid h-100">
                <div className="row h-100 align-items-center justify-content-center text-center">
                    <div className="col-lg-8 align-self-end mb-4 page-title">
                    	<h3 className="text-white">Manage Account</h3>
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
                            <div className="container-fluid">
                                <div className="col-md-12">
                                    <form action="" id="update_account">
                                        <div className="row form-group">
                                            <div className="col-md-4">
                                                <label htmlFor="" className="control-label">Last Name</label>
                                                <input type="text" className="form-control" name="lastname" value="<?php echo $_SESSION['bio']['lastname'] ?>" required />
                                            </div>
                                            <div className="col-md-4">
                                                <label htmlFor="" className="control-label">First Name</label>
                                                <input type="text" className="form-control" name="firstname" value="<?php echo $_SESSION['bio']['firstname'] ?>" required />
                                            </div>
                                            <div className="col-md-4">
                                                <label htmlFor="" className="control-label">Middle Name</label>
                                                <input type="text" className="form-control" name="middlename" value="<?php echo $_SESSION['bio']['middlename'] ?>" />
                                            </div>
                                        </div>
                                        <div className="row form-group">
                                            <div className="col-md-4">
                                                <label htmlFor="" className="control-label">Gender</label>
                                                <select className="custom-select" name="gender" required>
                                                    {/* <option <?php echo $_SESSION['bio']['gender'] =='Male' ? 'selected' : '' ?>>Male</option>
                                                    <option <?php echo $_SESSION['bio']['gender'] =='Female' ? 'selected' : '' ?>>Female</option> */}
                                                </select>
                                            </div>
                                            <div className="col-md-4">
                                                <label htmlFor="" className="control-label">Batch</label>
                                                <input type="input" className="form-control datepickerY" name="batch" value="<?php echo $_SESSION['bio']['batch'] ?>" required />
                                            </div>
                                            <div className="col-md-4">
                                                <label htmlFor="" className="control-label">Course Graduated</label>
                                                <select className="custom-select select2" name="course_id" required>
                                                    <option></option>
                                                    {/* $course = $conn->query("SELECT * FROM courses order by course asc"); */}
                                                        {/* <option value="<?php echo $row['id'] ?>"  <?php echo $_SESSION['bio']['course_id'] ==$row['id'] ? 'selected' : '' ?>><?php echo $row['course'] ?></option> */}
                                            
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row form-group">
                                            <div className="col-md-5">
                                                <label htmlFor="" className="control-label">Currently Connected To</label>
                                                {/* <textarea name="connected_to" id="" cols="30" rows="3" className="form-control"><?php echo $_SESSION['bio']['connected_to'] ?></textarea> */}
                                            </div>
                                            <div className="col-md-5">
                                                <label htmlFor="" className="control-label">Image</label>
                                                <input type="file" className="form-control" name="img" onChange="" />
                                                <img src="" alt="" id="cimg" />

                                            </div>  
                                        </div>
                                        <div className="row">
                                             <div className="col-md-4">
                                                <label htmlFor="" className="control-label">Email</label>
                                                <input type="email" className="form-control" name="email"  value="<?php echo $_SESSION['bio']['email'] ?>" required />
                                            </div>
                                            <div className="col-md-4">
                                                <label htmlFor="" className="control-label">Password</label>
                                                <input type="password" className="form-control" name="password" />
                                                <small><i>Leave this blank if you dont want to change your password</i></small>
                                            </div>
                                        </div>
                                        <div id="msg">
                                            
                                        </div>
                                        <hr className="divider" />
                                        <div className="row">
                                            <div className="col-md-12 text-center">
                                                <button className="btn btn-primary">Update Account</button>
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

export default MyAccount