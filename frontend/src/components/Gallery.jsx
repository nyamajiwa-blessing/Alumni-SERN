import React from 'react'

const Gallery = () => {
    return (
        <>
            <header className="masthead">
                <div className="container-fluid h-100">
                    <div className="row h-100 align-items-center justify-content-center text-center">
                        <div className="col-lg-8 align-self-end mb-4 page-title">
                            <h3 className="text-white">Gallery</h3>
                            <hr className="divider my-4" />

                            <div className="col-md-12 mb-2 justify-content-center">
                            </div>
                        </div>

                    </div>
                </div>
            </header>
            <div className="container-fluid mt-3 pt-2">

                <div className="row-items">
                    <div className="col-lg-12">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card gallery-list <?php echo $rtl ?>" data-id="<?php echo $row['id'] ?>">
                                    <div className="gallery-img" card-img-top>

                                        <img src="" alt="" />
                                    </div>
                                    <div className="card-body">
                                        <div className="row align-items-center justify-content-center text-center h-100">
                                            <div className="">
                                                <div>
                                                    <span className="truncate" style={{fontSize: "inherit"}}><small>about</small></span>
                                                    <br />
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                                <br />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Gallery