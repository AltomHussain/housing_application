import React, { useState } from "react";
import "./SignupForm.css";
export default function SignupForm() {
  const initialValues = {
    firstName: "dd",
    surname: "ff",
    email: "",
    confirmEmail: "",
    city: "",
    phoneNumber: "",
  };
  const [input, setInput] = useState(initialValues);
  const { firstName, surname, email, confirmEmail, city, phoneNumber } = input;
  const handleChange = (e) => {
      const updateValues = {
          ...input,
          [e.target.name]: e.target.value,
        };
        setInput(updateValues);
    };
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("hello there");
    }
    
    return (
    <div className="form-container">
      <form className="form-group" onSubmit={handleSubmit}>
        <label>First Name</label>
        <input
          type="text"
          placeholder="First name"
          className="form-control"
          value={firstName}
          onChange={handleChange}
          name="firstName"
        />
        <label>Surname</label>
        <input
          type="text"
          placeholder="Surname"
          className="form-control"
          value={surname}
          onChange={handleChange}
          name="surname"
        />
        <label>Email Address</label>
        <input
          type="text"
          placeholder="Email address"
          className="form-control"
          value={email}
          onChange={handleChange}
          name="email"
        />
        <label>Confirm Email address</label>
        <input
          type="text"
          placeholder="Confirm email address"
          className="form-control"
          value={confirmEmail}
          onChange={handleChange}
          name="confirmEmail"
        />
        <label>City</label>
        <input
          type="text"
          placeholder="City"
          className="form-control"
          value={city}
          onChange={handleChange}
          name="city"
        />
        <label>Phone number</label>
        <input
          type="number"
          placeholder=""
          className="form-control"
          value={phoneNumber}
          onChange={handleChange}
          name="phoneNumber"
        />
        <button className="btn btn-success form-control">Submit</button>
      </form>
    </div>
  );
}
