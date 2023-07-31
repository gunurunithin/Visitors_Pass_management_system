import React from "react";
import './homestyle.css'
import Vpass from './img1.jpg';
function Home() {
    return (
        <>
        {/* <Mainbar/> */}
        <div>
            <div className="row">
                <div id="colmd4">
                    <p>Total Count:</p>
                    <p>12</p>
                </div>
            </div>
            <div className="row" id="hommar">
                <div className="col-md-6">
                    <div className="row">
                        <h2 id="homh2">Welcome to <br />Aditya Educational Institutions</h2>
                    </div>
                    <div className="row">
                        <p id="hompa">The visitor pass management system allows organisations to give different permissions to different levels of visitor entry:
                            Employees entering the building with their employee ID Contractors you might restrict to certain floors Sup
                            pliers’ access to floors like Catering is limited to one floor Cleaners to all floors but only out of hours</p>
                    </div>
                </div>
                <div className="col-md-6"><img src={Vpass} id="vlogo" /></div>
            </div>
        </div>
        </>
    )
}
export default Home