import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <>
            <Header />
            <Sidebar />
            <main id="main" className="main">
                <Outlet />
            </main>
        </>
    )
}

export default Dashboard