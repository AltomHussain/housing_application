import React, { useState } from "react";
import "./SignupForm.css";
export default function SignupForm() {
  const [input, setInput] = useState({
    firstName: "",
    surname: "",
    email: "",
    confirmEmail: "",
    city: "",
    phoneNumber: "",
  });
  const [firstNameError, setFirstNameError] = useState("");
  const [surnameError, setSurnameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [confirmError, setConfirmError] = useState("");
  const [cityError, setcityError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const { firstName, surname, email, confirmEmail, city, phoneNumber } = input;
  const handleChange = (e) => {
    const updateValues = {
      ...input,
      [e.target.name]: e.target.value,
    };
    setInput(updateValues);
  };
  console.log(input.firstName);
  const handleSubmit = (e) => {
    const fill = "Please fill the field";
    if (!firstName) {
        setFirstNameError(fill);
    }
    if (!surname) {
        setSurnameError(fill);
    }
    if (!email) {
        setEmailError(fill);
    }
    if (!confirmEmail) {
        setConfirmError(fill);
    }
    if (!city) {
        setcityError(fill);
    }
    if (!phoneNumber) {
        setPhoneError(fill);
    }
    setInput("");
    e.preventDefault();
  };
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
        {<p>{firstNameError}</p>}
        <label>Surname</label>
        <input
          type="text"
          placeholder="Surname"
          className="form-control"
          value={surname}
          onChange={handleChange}
          name="surname"
        />
        {<p>{surnameError}</p>}
        <label>Email Address</label>
        <input
          type="text"
          placeholder="Email address"
          className="form-control"
          value={email}
          onChange={handleChange}
          name="email"
        />
        {<p>{emailError}</p>}
        {<p>{firstNameError && firstNameError}</p>}
        <label>Confirm Email address</label>
        <input
          type="text"
          placeholder="Confirm email address"
          className="form-control"
          value={confirmEmail}
          onChange={handleChange}
          name="confirmEmail"
        />
        {<p>{confirmError}</p>}
        <label>City</label>
        <input
          type="text"
          placeholder="City"
          className="form-control"
          value={city}
          onChange={handleChange}
          name="city"
        />
        {<p>{cityError}</p>}
        <label>Phone number</label>
        <input
          type="number"
          placeholder=""
          className="form-control"
          value={phoneNumber}
          onChange={handleChange}
          name="phoneNumber"
        />
        {<p>{phoneError}</p>}
        <button className="btn btn-success form-control">Submit</button>
      </form>
    </div>
  );
}
