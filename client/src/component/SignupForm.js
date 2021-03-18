import React from "react";
import "./SignupForm.css"
export default function SignupForm() {
  return (
    <div className="form-container">
      <form className="form-group">
        <label>First Name</label>
        <input type="text" placeholder="First name" className="form-control"/>
        <label>Surname</label>
        <input type="text" placeholder="Surname" className="form-control"/>
        <label>Email Address</label>
        <input type="text" placeholder="Email address" className="form-control"/>
        <label>Confirm Email address</label>
        <input type="text" placeholder="Confirm email address" className="form-control"/>
        <label>City</label>
        <input type="text" placeholder="City" className="form-control"/>
        <label>Phone number</label>
        <input type="text" placeholder="" className="form-control"/>
        <button className="btn btn-success form-control">Submit</button>
      </form>
    </div>
  );
}
