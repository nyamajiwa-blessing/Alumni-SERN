import React, { useState, useEffect } from 'react';
import { FaUsers , FaBriefcase} from "react-icons/fa";
import { IoCalendar } from "react-icons/io5";
import { RiSuitcaseFill } from "react-icons/ri";
import { MdForum } from "react-icons/md";
import axios from "axios";



const AdminHome = () => {

  const [counts, setCounts] = useState({
    alumni: 0,
    forums: 0,
    jobs: 0,
    upevents: 0,
    events: 0
  });

  useEffect(() => {
    axios.get("http://localhost:3000/auth/counts")
    .then((res) => {
      console.log("Counts data:", res.data);
      setCounts(res.data);
  })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <section className="section dashboard cutommargin ">
        <div className="row  ">
          <div className="col-lg-10 m-2">
            <div className="row  ">
              <div className="col-xxl-4 col-xl-6">
                <div className="card info-card customers-card">
                  <div className="card-body">
                    <h5 className="card-title">Alumni <span>| Total</span></h5>
                    <div className="d-flex align-items-center">
                      <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        <FaUsers />
                      </div>
                      <div className="ps-3">
                        <h6>{counts.alumni}</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xxl-4 col-md-6">
                <div className="card info-card sales-card">
                  <div className="card-body">
                    <h5 className="card-title">Forum Topics <span>| Total</span></h5>

                    <div className="d-flex align-items-center">
                      <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        <MdForum />
                      </div>
                      <div className="ps-3">
                        <h6>{counts.forums}</h6>

                      </div>
                    </div>
                  </div>

                </div>
              </div>

              <div className="col-xxl-4 col-md-6">
                <div className="card info-card revenue-card">

                  <div className="card-body">
                    <h5 className="card-title">Posted Jobs <span>| Now</span></h5>

                    <div className="d-flex align-items-center">
                      <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        <FaBriefcase />
                      </div>
                      <div className="ps-3">
                        <h6>{counts.jobs}</h6>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div className="col-xxl-4 col-xl-6">
                <div className="card info-card purple-card">
                  <div className="card-body">
                    <h5 className="card-title">Upcoming Events <span>| Total</span></h5>

                    <div className="d-flex align-items-center">
                      <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        <IoCalendar />
                      </div>
                      <div className="ps-3">
                        <h6>{counts.upevents}</h6>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AdminHome