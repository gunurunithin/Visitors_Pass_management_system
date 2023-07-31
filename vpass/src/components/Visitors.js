import React ,{useState} from 'react';
import axios from 'axios';


function Visitors() {
  const [send, setSend] = useState({
    fname: "",
    lname: "",
    email: "",
    number: "",
    in: "",
    out: "",
    purpose: "",
    address: "",
    date:"",
    veh:"",
    des: "",
    dates:"",
    gender:"",
    identity:"",
  })

  const handleChange = (e) => {
    setSend((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const postSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:5000/postdata', { send })
    console.log(send)

    alert('Success')
  }
  return (
    <>
        {/* <Mainbar/> */}

    <div className="container"  style={{ paddingLeft: "40px",background:"rgb(0 0 0 / 14%)" }}>
      <h1><b>Visitors Details:</b></h1>
      <br />
      <div className="row">
        <div className="col-md-6" id="column1" style={{ maxWidth: '450px' }}>
          <form>
            <div className="form-group">
              <label><b>First Name:</b></label>
              <input type="text" name="fname" onChange={handleChange} className="form-control" />
            </div>
            <div className="form-group">
              <label><b>Email:</b></label>
              <input type="email"  name="email" onChange={handleChange} className="form-control" />
            </div>
            <div className="form-group">
              <label><b>Time In:</b></label>
              <input type="time" name="in" onChange={handleChange} className="form-control" />
            </div>
            <div className="form-group">
              <label><b>Purpose:</b></label>
              <input type="textarea"  name="purpose" onChange={handleChange} className="form-control" />
            </div>
            <div className="form-group">
              <label><b>Date In:</b></label>
              <input type="date"  name="date" onChange={handleChange} className="form-control" />
            </div>
            <div className="form-group">
              <label><b>Vehicle No:</b></label>
              <input type="textarea"  name="veh" onChange={handleChange} className="form-control" />
            </div>
            <br />
            <div className="form-group">
              <label><b>Description:</b></label>
              <textarea rows="4" cols="50"  name="des" onChange={handleChange} form="usrform"></textarea>
            </div>
          </form>
        </div>
        <div className="col-md-6 " id="column2" style={{ maxWidth: '450px' }}>
          <form>
            <div className="form-group">
              <label><b>Last Name:</b></label>
              <input type="text"  name="lname" onChange={handleChange} className="form-control" />
            </div>
            <div className="form-group">
              <label><b>Contact Number:</b></label>
              <input type="text"  name="number" onChange={handleChange} className="form-control" />
            </div>
            <div className="form-group">
              <label><b>Time Out(Estimated):</b></label>
              <input type="time"  name="out" onChange={handleChange} className="form-control" />
            </div>
            <div className="form-group">
              <label><b>Address:</b></label>
              <input type="textarea"  name="address" onChange={handleChange} className="form-control" />
            </div>
            <div className="form-group">
              <label><b>Date Out:</b></label>
              <input type="date"  name="dates" onChange={handleChange} className="form-control" />
            </div>
            <div className="form-group">
              <label><b>Gender:</b></label>
              <input type="textarea"  name="gender" onChange={handleChange} className="form-control" />
            </div>
            <div className="form-group">
              <label><b>Visitor-Identity:</b></label>
              <input type="textarea"  name="identity" onChange={handleChange} className="form-control" />
            </div>
          </form>
        </div>
      </div>
      <div className="row">
      <center><input type="submit" onClick={postSubmit} className="btn btn-primary btn-md" id="btnid" style={{ marginBottom:"30px"}}/></center>
      </div>

    <div>
      <button className='btn btn-primary' onClick={() => window.print()}>Print</button>
    </div>

    </div>
    </>
  );
}
export default Visitors;