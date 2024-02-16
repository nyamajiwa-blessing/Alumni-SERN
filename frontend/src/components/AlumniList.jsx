import React from 'react'

const AlumniList = () => {
  return (
    <>
    <header className="masthead">
            <div className="container-fluid h-100">
                <div className="row h-100 align-items-center justify-content-center text-center">
                    <div className="col-lg-8 align-self-end mb-4 page-title">
                        <h3 className="text-white">Alumnus/Alumnae List</h3>
                        <hr className="divider my-4" />

                    <div className="col-md-12 mb-2 justify-content-center">
                    </div>                        
                    </div>
                    
                </div>
            </div>
        </header>
        	<div className="container">
        		<div className="card mb-4 mt-4">
		        <div className="card-body">
		            <div className="row">
		                <div className="col-md-8">
		                    <div className="input-group mb-3">
		                      <div className="input-group-prepend">
		                        <span className="input-group-text" id="filter-field"><i className="fa fa-search"></i></span>
		                      </div>
		                      <input type="text" className="form-control" id="filter" placeholder="Filter name,course, etc." aria-label="Filter" aria-describedby="filter-field" />
		                    </div>
		                </div>
		                <div className="col-md-4">
		                    <button className="btn btn-primary btn-block btn-sm" id="search">Search</button>
		                </div>
		            </div>
		            
		        </div>
		    </div>
        	</div>	
            <div className="container-fluid mt-3 pt-2">
               
                <div className="row-items">
                <div className="col-lg-12">
                    <div className="row">
                <div className="col-md-4 item">
                <div className="card alumni-list" data-id="<?php echo $row['id'] ?>">
                        <div className="alumni-img" card-img-top>

                            <img src="" alt="" />
                        </div>
                    <div className="card-body">
                        <div className="row align-items-center h-100">
                            <div className="">
                                <div>
                                <p className="filter-txt"><b>name</b></p>
                                <hr className="divider w-100" style={{maxWidth: "calc(100%)"}}/>
                                <p className="filter-txt">Email: <b></b></p>
                                <p className="filter-txt">Course: <b></b></p>
                                <p className="filter-txt">Batch: <b></b></p>
                                <p className="filter-txt">Currently working in/as <b></b></p>
                                    <br/>
                                </div>
                            </div>
                        </div>
                        

                    </div>
                </div>
                <br/>
                </div>
                
                </div>
                </div>
                </div>
            </div>
            </>
  )
}

export default AlumniList