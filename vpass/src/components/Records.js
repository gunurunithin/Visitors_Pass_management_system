import React from "react";
import {useEffect,useState} from 'react';
import axios from 'axios';
import './records.css';
function Records() {

        const [houses, sethouses] = useState([])
        useEffect(() => {
            axios.get('http://localhost:5000/getData')
                .then((res) => sethouses(res.data))
        })
        return (
            <div className="container" id="rec">
                <div className="row">
                    <p id="rectext"><center>Records</center></p>
                </div>
                <div className="row">
                    <div className="col-md-12" >
                        <table id="rec2">
                            <tr id="trhe">
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Contact Number</th>
                                <th>Time In</th>
                                <th>Time Out(Estimated)</th>
                                <th>Date In</th>
                                <th>Date Out(Estimated)</th>
                                <th>Vehicle No</th>
                                <th>Purpose</th>
                                <th>Address</th>
                                <th>Visitor</th>
                                <th>Gender</th>
                                <th>Description</th>
                            </tr>
                            {
                                houses.map((val, key) => {
                                    return (
                                        <tr key={key} id="trhov">

                                            <td>{val.fname}</td>
                                            <td>{val.lname}</td>
                                            <td>{val.email}</td>
                                            <td>{val.number}</td>
                                            <td>{val.in}</td>
                                            <td>{val.out}</td>
                                            <td>{val.date}</td>
                                            <td>{val.dates}</td>
                                            <td>{val.veh}</td>
                                            <td>{val.purpose}</td>
                                            <td>{val.address}</td>
                                            <td>{val.identity}</td>
                                            <td>{val.gender}</td>
                                            <td>{val.des}</td>


                                        </tr>
                                    )
                                })
                            }
                        </table>
                    </div>
                </div>
            </div>
        )
    }
    export default Records;