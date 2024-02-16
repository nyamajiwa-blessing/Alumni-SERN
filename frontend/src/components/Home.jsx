import React from 'react'

const Home = () => {
    return (
        <div>
            <header className="masthead">
                <div className="container-fluid h-100">
                    <div className="row h-100 align-items-center justify-content-center text-center">
                        <div className="col-lg-8 align-self-end mb-4 page-title">
                            <h3 className="text-white">Welcome to ALUMNI</h3>
                            <hr className="divider my-4" />

                            <div className="col-md-12 mb-2 justify-content-center">
                            </div>
                        </div>

                    </div>
                </div>
            </header>
            <div className="container mt-3 pt-2">
                <h4 className="text-center text-black-50">Upcoming Events</h4>
                <hr className="divider" />
                <div className="card event-list" data-id="<?php echo $row['id'] ?>">
                    <div className='banner'>
                        <img src="" alt="" />
                    </div>
                    <div className="card-body">
                        <div className="row  align-items-center justify-content-center text-center h-100">
                            <div className="">
                                <h3><b className="filter-txt">title</b></h3>
                                <div><small><p><b><i className="fa fa-calendar"></i> time</b></p></small></div>
                                <hr />
                                <p className="truncate filter-txt">desc</p>
                                <br />
                                <hr className="divider" style={{ maxWidth: "calc(80%)" }} />
                                <button className="btn btn-primary float-right read_more" data-id="<?php echo $row['id'] ?>">Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
            </div>
        </div>
    )
}

export default Home