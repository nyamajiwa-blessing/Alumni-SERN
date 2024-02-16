import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaPlus } from "react-icons/fa";
import axios from 'axios';


const AdminAlumni = () => {
  const [alumni, setAlumni] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/auth/alumni')
      .then((res) => {
        setAlumni(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const navigate = useNavigate()

  

  return (
    <>
      <div className="container-fluid">

        <div className="col-lg-12">
          <div className="row mb-4 mt-4">
            <div className="col-md-12">

            </div>
          </div>
          <div className="row">

            <div className="col-md-12 col-sm-8  ">
              <div className="card">
                <div className="card-header">
                  <b>List of Alumni ({alumni.length})</b>
                  {/* <span className="float:right"><Link className="btn btn-primary btn-block btn-sm col-sm-2 float-right" id="new_alumni">
                    <FaPlus /> New Entry
                  </Link></span> */}
                </div>
                <div className="card-body">
                  <table className="table table-responsive-sm     table-condensed table-bordered table-hover">

                    {/* <colgroup>
								<col width="5%"/>
								<col width="10%"/>
								<col width="15%"/>
								<col width="15%"/>
								<col width="30%"/>
								<col width="15%"/>
							</colgroup> */}
                    <thead>
                      <tr >
                        <th className="text-center">#</th>
                        <th className="">Avatar</th>
                        <th className="">Name</th>
                        <th className="">Course Graduated</th>
                        <th className="">Status</th>
                        <th className="text-center">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* $alumni = $conn->query("SELECT a.*,c.course,Concat(a.lastname,', ',a.firstname,' ',a.middlename) as name from alumnus_bio a inner join courses c on c.id = a.course_id order by Concat(a.lastname,', ',a.firstname,' ',a.middlename) asc"); */}
                      {alumni.map((a, index) => (

                        <tr key={index}>
                          <td className="text-center">1</td>
                          <td className="text-center">
                            <div className="avatar">
                              <img src={`http://localhost:3000/${a.avatar}`} className="gimg" alt="avatar" />
                            </div>
                          </td>
                          <td className="">
                            <p> <b>{a.name}</b></p>
                          </td>
                          <td className="">
                            <p> <b>{a.course}</b></p>
                          </td>
                          <td className="text-center">
                            {a.status === 1 && <span className="badge badge-primary">Verified</span>}
                            {a.status === 0 && <span className="badge badge-secondary">Not Verified</span>}
                          </td>
                          <td className="text-center justify-content-center border-0 d-block  gap-1">
                            <button onClick={()=> navigate("/dashboard/alumni/view",{state:{status:"view",data:a}})} className="btn btn-sm btn-outline-primary  view_alumni" type="button" >View</button>
                            <button className="btn btn-sm btn-outline-danger delete_alumni ms-1" type="button" >Delete</button>
                          </td>
                        </tr>))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default AdminAlumni