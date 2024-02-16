import React from 'react'

const Forum = () => {
    return (
        <>
            <header className="masthead">
                <div className="container-fluid h-100">
                    <div className="row h-100 align-items-center justify-content-center text-center">
                        <div className="col-lg-8 align-self-end mb-4 page-title">
                            <h3 className="text-white">Forum List</h3>
                            <hr className="divider my-4" />
                            <div className="row col-md-12 mb-2 justify-content-center">
                                <button className="btn btn-primary btn-block col-sm-4" type="button" id="new_forum"><i class="fa fa-plus"></i> Create New Topic</button>
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
                                    <input type="text" class="form-control" id="filter" placeHolder="Filter" aria-label="Filter" aria-describedby="filter-field" />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <button class="btn btn-primary btn-block btn-sm" id="search">Search</button>
                            </div>
                        </div>

                    </div>
                </div>
                {/* $event = $conn->query("SELECT f.*,u.name from forum_topics f inner join users u on u.id = f.user_id order by f.id desc"); */}
                <div className="card Forum-list" data-id="<?php echo $row['id'] ?>">
                    <div className="card-body">
                        <div className="row  align-items-center justify-content-center text-center h-100">
                            <div className="">
                                <div className="dropdown float-right mr-4">
                                    <a class="text-dark" href="javascript:void(0)" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span className="fa fa-ellipsis-v"></span>
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a class="dropdown-item edit_forum" data-id="<?php echo $row['id'] ?>" href="javascript:void(0)">Edit</a>
                                        <a class="dropdown-item delete_forum" data-id="<?php echo $row['id'] ?>" href="javascript:void(0)">Delete</a>
                                    </div>
                                </div>
                                <h3><b className="filter-txt">title</b></h3>
                                <hr />
                                <larger className="truncate filter-txt">desc</larger>
                                <br />
                                <hr class="divider" style={{ maxWidth: "calc(80%)" }} />
                                <span className="badge badge-info float-left px-3 pt-1 pb-1">
                                    <b><i>Topic Created by: <span className="filter-txt">name</span></i></b>
                                </span>
                                <span className="badge badge-secondary float-left px-3 pt-1 pb-1 ml-2">
                                    <b><i className="fa fa-comments"></i> <i> Comments</i></b>
                                </span>
                                <button className="btn btn-primary float-right view_topic" data-id="<?php echo $row['id'] ?>">View Topic</button>
                            </div>
                        </div>


                    </div>
                </div>
                <br />

            </div>



        </>
    )
}

export default Forum