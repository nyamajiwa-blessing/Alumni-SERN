import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const AlumniList = () => {
    const [alumniList, setAlumniList] = useState([]);
    const [filteredAlumni, setFilteredAlumnni] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        axios.get("http://localhost:3000/auth/alumni_list")
            .then((res) => {
                console.log(res.data);
                setAlumniList(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    const handleSearchInputChange = (e) => {
        setSearchQuery(e.target.value);
    }

    useEffect(() => {
        const filteredlist = alumniList.filter(list =>
            list.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            list.course.toLowerCase().includes(searchQuery.toLowerCase()) ||
            list.batch.toString().includes(searchQuery)
            // list.batch.toString() === searchQuery
        );
        setFilteredAlumnni(filteredlist);
    }, [searchQuery, alumniList]);


    return (
        <>
            <header className="masthead">
                <div className="container-fluid h-100">
                    <div className="row h-100 align-items-center justify-content-center text-center">
                        <div className="col-lg-8 align-self-end mb-4 page-title">
                            <h3 className="text-white">Alumnus/Alumnae List</h3>
                            <hr className="divider my-4" />
                        </div>
                    </div>
                </div>
            </header>
            <div className="container mt-4">
                <div className="card mb-4">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="filter-field">
                                            <FaSearch />
                                        </span>
                                    </div>
                                    <input
                                        value={searchQuery} onChange={handleSearchInputChange}
                                        type="text"
                                        className="form-control"
                                        id="filter"
                                        placeholder="Filter name, course, etc."
                                        aria-label="Filter"
                                        aria-describedby="filter-field"
                                    />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <button className="btn btn-primary btn-block btn-sm" id="search">
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid mt-3 pt-2">
                <div className="row">
                    {filteredAlumni.map((a, index) => (
                        <div className="col-md-4 mb-4" key={index}>
                            <div className="card">
                                <center> <img
                                    src={`http://localhost:3000/${a.avatar}`}
                                    className="card-img-top img-fluid alimg "
                                    alt="avatar"
                                /></center>
                                <div className="card-body">
                                    <h5 className="card-title text-center ">{a.name} <small>
                                        <i className={`badge badge-primary ${a.status === 1 ? '' : 'd-none'}`}>
                                            Verified
                                        </i>
                                    </small></h5>

                                    <p className="card-text">
                                        <strong>Email:</strong> {a.email}
                                    </p>
                                    <p className="card-text">
                                        <strong>Course:</strong> {a.course}
                                    </p>
                                    <p className="card-text">
                                        <strong>Batch:</strong> {a.batch}
                                    </p>
                                    <p className="card-text">
                                        <strong>Currently working in/as:</strong> {a.connected_to}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default AlumniList;
