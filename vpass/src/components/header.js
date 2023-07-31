import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './header.css';
import logo from './logo.jpg';
import { Link } from 'react-router-dom';
import { red } from '@mui/material/colors';
import './header.css'
const Header = () => {
    return (
        <div>
            <div className='row' id='row1'>
                <div className='col-md-2'>
                < img src={logo}  id='logo' />
                </div>
                <div className='col-md-10'>
                <h2 id='text'>Visitor's pass management system</h2>
                </div>
            </div>
        </div>
    )
}
export default Header;