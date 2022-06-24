import React from "react";
import { useLocation } from 'react-router-dom'
function Appointment() {
    const location=useLocation();
    const onsubmit=async (e)=>{
        e.preventDefault();
       let n=e.target.name.value;
       let email=e.target.email.value;
       let add=e.target.Address.value;
       let doa=e.target.date.value;
       let data = await fetch("http://localhost:4000/getappointment", {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name:n,email:email,add:add,doa:doa,doc:location.state.doctor }),
        });
       data=await data.json();
       console.log(data);
       
    }
  return (
    <>
      <div className="container">
        <h3 className="text-center">BOOK AN APPOINTMENT</h3>
        <form action="submit" onSubmit={onsubmit}>
          <div className="row">
            <div className="name-class">
              <label htmlFor="" className="col-form-label">
                Name *
              </label>
              <br />
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                placeholder="Your name"
              />
              <hr className="line" />
            </div>

            <div className="email-class">
              <label htmlFor="" className="col-form-label">
                Email *
              </label>
              <br />
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                placeholder="Your email"
              />
              <hr className="line" />
            </div>
          </div>

          <div className="column">
            <div className="address-class">
              <label htmlFor="text" className="col-form-label">
                Address
              </label>
              <br />
              <input
                type="text"
                className="form-control"
                name="Address"
                id="address"
                placeholder="Your Address"
              />
              <hr className="line2" />
            </div>
            <div className="date-class">
              <label htmlFor="date" className="col-form-label">
                Date *
              </label>
              <br />
              <input type="date" className="form-control" name="date" id="date" />
              <hr className="line2" />
            </div>
          </div>
          <br />
          <div className="btn-class">
            <button className="btn" type="submit" >Book Appointment</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Appointment;
