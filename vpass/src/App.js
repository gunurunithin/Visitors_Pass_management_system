import React from 'react';
import logo from './logo.svg';
import Header from './components/header.js';
import Dashboard from './components/dashboard';
import Contact from './components/Contact.js'
import Visitors from './components/Visitors.js'
import Employee from './components/employees.js'
import Home from "./components/home"
import LoginPage from './components/login';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';

function App() {
  return (
    <div>
      
      <Header/>

      <div className='col-md-12'>
          <Dashboard/>
      </div>

      {/* <div className='col-md-10'>
        
      </div> */}


      {/* <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Mainbar" element={<Mainbar />} /> */}
            {/* <Route path="/header" element={<Header />} /> */}
            {/* <Route path="/Dashboard" element={<Dashboard />} /> */}
            {/* <Route path="/employees" element={<Employee />} />
            <Route path="/Visitors" element={<Visitors />} />
            <Route path="/records" element={<Records/>} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/login" element={<LoginPage />} /> */}
        {/* </Routes> */}
      {/* </BrowserRouter> */}

    </div>

  );
}

export default App;
