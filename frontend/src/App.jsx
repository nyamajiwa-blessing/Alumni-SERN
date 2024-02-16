import "./styles/style.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './components/Home'
import Footer from './components/Footer'
import Header from "./components/Header";
import AlumniList from "./components/AlumniList";
import Gallery from "./components/Gallery";
import Careers from "./components/Careers";
import Forum from "./components/Forum";
import About from "./components/About";
import Login from "./components/login";
import Signup from "./components/Signup";
import MyAccount from "./components/MyAccount";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./admin/Dashboard";
import AdminHome from "./admin/AdminHome";
import AdminCourses from "./admin/AdminCourses";
import AdminUsers from "./admin/AdminUsers";
import AdminGallery from "./admin/AdminGallery";
import AdminSettings from "./admin/AdminSettings";
import AdminEvents from "./admin/AdminEvents";
import AdminForum from "./admin/AdminForum";
import AdminAlumni from "./admin/AdminAlumni";
import AdminJobs from "./admin/AdminJobs";
import ManageJobs from "./admin/save/ManageJobs";
import View_Event from "./components/view/View_Event";
import ManageEvents from "./admin/save/ManageEvents";
import View_Forum from "./components/view/View_Forum";
import { useEffect, useState } from "react";
import ManageForum from "./admin/save/ManageForum";
import ManageUser from "./admin/save/ManageUser";
import ViewAlumni from "./admin/view/ViewAlumni";
// import ViewJobs from "./admin/view/ViewJobs";

function App() {
  const [isAdmin, setIsAdmin] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  // useEffect(() => {
  //   const user = localStorage.getItem('user_type');
  //   if (user === 'admin') {
  //     setIsAdmin(true);
  //     setIsLoggedIn(true);
  //   } else if (user === 'alumni') {
  //     setIsAdmin(false);
  //     setIsLoggedIn(true);
  //   } else {
  //     setIsAdmin(false);
  //     setIsLoggedIn(false);
  //   }
  // }, []);

  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {isLoggedIn && isAdmin && (
            <Route path="/dashboard" element={<Dashboard />} >
              <Route path="" element={<AdminHome />} />
              <Route path="/dashboard/courses" element={<AdminCourses />} />
              <Route path="/dashboard/users" element={<AdminUsers />} />
              <Route path="/dashboard/gallery" element={<AdminGallery />} />
              <Route path="/dashboard/settings" element={<AdminSettings />} />
              <Route path="/dashboard/events" element={<AdminEvents />} />
              <Route path="/dashboard/forum" element={<AdminForum />} />
              <Route path="/dashboard/alumnilist" element={<AdminAlumni />} />
              <Route path="/dashboard/jobs" element={<AdminJobs />} />
              <Route path="/dashboard/jobs/manage" element={<ManageJobs />} />
              <Route path="/dashboard/events/manage" element={<ManageEvents />} />
              <Route path="/dashboard/forum/manage" element={<ManageForum />} />
              <Route path="/dashboard/users/manage" element={<ManageUser />} />
              <Route path="/dashboard/alumni/view" element={<ViewAlumni />} />
              {/* <Route path="/dashboard/alumni/view" element={<ViewAlumni />} /> */}
            </Route>)}
          <Route path="events/view" element={<View_Event />} />
          <Route path="forum/view" element={<View_Forum />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>

    </>
  )
}

export default App
