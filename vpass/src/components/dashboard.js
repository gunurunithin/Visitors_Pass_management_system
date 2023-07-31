// import React from 'react'
// import './dashboard.css'
// import { Link } from 'react-router-dom';
// import Visitors from './Visitors';
// import Contact from './Contact';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Pic from './img1.jpg';

// function Dashboard() {
//     return (
//         <div>
//             <div className='row'>
//                 <div className='col-md-2' id='md3'>
//                 <ul>
//                     <li><Link to='/'>Home</Link></li>
//                     <li>Employee's</li>
//                     <li><Link to='/Visitors'>Visitor's</Link></li>
//                     <li>Records</li>
//                     <li><Link to='/Contact'>ContactUs</Link></li>
//                     <li>Log out</li>
//                 </ul>
//                 </div>
//         </div>
        
        
//         <Routes>
//         <Route path="/Visitors" element={<Visitors />} />
//         <Route path="/Contact" element={<Contact />} />
//       </Routes>
//       </div>
//     )
// }

// export default Dashboard;

import React from "react";
import "./dashboard.css";
import "./login.css";
import Login from "./login.js"
import { Link } from "react-router-dom";
import Visitors from "./Visitors";
import Contact from "./Contact";
import Employee from './employees.js';
import Records from './Records';

import Home from "./home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Dashboard() {
  return (
    // <div className="dash">
    //   <nav>
    //     <ul type="none">
    //       <li><Link to="/home"> Home </Link></li>
    //       <li>Employee's</li>
    //       <li><Link to="/Visitors"> Visitors </Link></li>
    //       <li>Records</li>
    //       <li><Link to="/Contact"> Contactus </Link></li>
    //       <li><Link to="/login"> LogOut </Link></li>
    //     </ul>
    //   </nav>
    //   <Routes>
    //     <Route path="/home" element={<Home/>} />
    //     <Route path="/Visitors" element={<Visitors />} />
    //     <Route path="/Contact" element={<Contact />} />
    //     <Route path="/login" element={<Login />} />
    //   </Routes>
    //   {/* <Visitors /> */}
    // </div>
    <div className="row">
      <div className="col-md4">
        <div className="dash">
          <ul type="none" id="none">
            <li><Link to="/Home" style={{color:"black" , textDecoration:"none", fontWeight:"600"}}> Home </Link></li>
            <li><Link to="/employees"  style={{color:"black" , textDecoration:"none", fontWeight:"600px"}}>Employee's</Link></li>
            <li><Link to="/Visitors" style={{color:"black" , textDecoration:"none", fontWeight:"600px"}}> Visitors </Link></li>
            <li><Link to="/records" style={{color:"black" , textDecoration:"none", fontWeight:"600px"}}>Records</Link></li>
            <li><Link to="/Contact" style={{color:"black" , textDecoration:"none", fontWeight:"600px"}}> Contactus </Link></li>
            <li><a href="<Login/>" style={{color:"black" , textDecoration:"none", fontWeight:"600px"}}> LogOut </a></li>
          </ul>
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/employees" element={<Employee />} />
            <Route path="/records" element={<Records/>} />
            <Route path="/Visitors" element={<Visitors />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;