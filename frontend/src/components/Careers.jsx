import React from 'react'

const Careers = () => {
    return (
        <>
            <header className="masthead">
                <div className="container-fluid h-100">
                    <div className="row h-100 align-items-center justify-content-center text-center">
                        <div className="col-lg-8 align-self-end mb-4 page-title">
                            <h3 className="text-white">Job List</h3>
                            <hr className="divider my-4" />
                            <div className="row col-md-12 mb-2 justify-content-center">
                                <button className="btn btn-primary btn-block col-sm-4" type="button" id="new_career"><i class="fa fa-plus"></i> Post a Job Opportunity</button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="container mt-3 pt-2">
                <div className="card mb-4">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="filter-field"><i class="fa fa-search"></i></span>
                                    </div>
                                    <input type="text" class="form-control" placeholder="Filter" id="filter" aria-label="Filter" aria-describedby="filter-field" />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <button class="btn btn-primary btn-block btn-sm" id="search">Search</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* $event = $conn->query("SELECT c.*,u.name from careers c inner join users u on u.id = c.user_id order by id desc"); */}
                <div className="card job-list" data-id="<?php echo $row['id'] ?>">
                    <div className="card-body">
                        <div className="row  align-items-center justify-content-center text-center h-100">
                            <div className="">
                                <h3><b className="filter-txt">Title</b></h3>
                                <div>
                                    <span className="filter-txt"><small><b><i class="fa fa-building"></i> company</b></small></span>
                                    <span className="filter-txt"><small><b><i class="fa fa-map-marker"></i> loc</b></small></span>
                                </div>
                                <hr />
                                <larger className="truncate filter-txt">desc</larger>
                                <br />
                                <hr class="divider" style={{ maxWidth: "calc(80%)" }} />
                                <span className="badge badge-info float-left px-3 pt-1 pb-1">
                                    <b><i>Posted by: </i></b>
                                </span>
                                <button className="btn btn-primary float-right read_more" data-id="<?php echo $row['id'] ?>">Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
            </div>
        </>
    )
}

export default Careers