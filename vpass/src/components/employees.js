import React from "react";
import "./employee.css";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
import axios from "axios";

function Employee() {

  const [data, setData] = useState([]);
  const [f1,setf1] = useState("")
  const [f2,setf2] = useState("")
  const [f3,setf3] = useState("")
  const [f4,setf4] = useState("")

  const [input,setInput] = useState("");

  const[Inf,setInf]=useState({
    id:"",
    name:"",
    designation:"",
    college:""
});

  useEffect(() => {
    axios.get("http://localhost:5000/getdatacustomer").then((res) => {
      setData(res.data);
    });
  }, []);

  const getData = () => {
    var c = input.toLowerCase();
    for(let i=0;i<data.length;i++){
        var c2 = data[i].id.toLowerCase();
        if(c === c2){
            console.log(setInf(data[i]))
            setInf(data[i]);
            setf1(data[i].id);
            setf2(data[i].name);
            setf3(data[i].designation);
            setf4(data[i].college);
            break;
        }
        else{
          alert("User not found");
          break;
        }
    }
  }
  console.log(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target.value);
    alert("Done");

}

  return (
    <div className="container" id="Empcon">
      <div className="row" id="Erow">
        <div className="col-md-6">
          <form className="form-group" id="form" onSubmit={handleSubmit}>
            <label id="Emlabe">Scan your ID here: </label>
            <br />
            <br />
            <input
              type="text"
              className="form-control"
              placeholder="Enter your ID" onBlur={(e) =>{setInput(e.target.value)} }
            />
            <br />
            <br />
            <button className="btn btn-primary" id="Empstyle" onClick={getData}>
              Submit
            </button>
          </form>
        </div>
        <div className="col-md-6">
          <table>

            <tr>
              <th>Employee ID:</th>
              <td>{f1}</td>
            </tr>

            <tr>
              <th>Name:</th>
              <td> {f2} </td>
            </tr>

            <tr>
              <th>Designation:</th>
              <td>{f3}</td>
            </tr>
            
            <tr>
              <th>College:</th>
              <td>{f4}</td>
            </tr>
            
          </table>
        </div>
      </div>
    </div>
  );
}
export default Employee;
