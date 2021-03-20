import React, { useState, useEffect } from "react";
import "./SignupForm.css";
import { sendErrors } from "./Errors";

export default function SignupForm() {
  const [input, setInput] = useState({
    firstName: "",
    surname: "",
    email: "",
    confirmEmail: "",
    password: "",
    city: "",
    phoneNumber: "",
  });
  const [firstNameError, setFirstNameError] = useState("");
  const [surnameError, setSurnameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [confirmError, setConfirmError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [cityError, setcityError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const {
    firstName,
    surname,
    email,
    confirmEmail,
    city,
    phoneNumber,
    password,
  } = input;
  console.log(
    firstName,
    surname,
    email,
    confirmEmail,
    city,
    phoneNumber,
    password
  );


  const handleChange = (e) => {
    const updateValues = {
      ...input,
      [e.target.name]: e.target.value,
    };
    setInput(updateValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendErrors(
      firstName,
      surname,
      email,
      confirmEmail,
      password,
      city,
      phoneNumber,
      setFirstNameError,
      setSurnameError,
      setEmailError,
      setConfirmError,
      setcityError,
      setPhoneError,
      setPasswordError,
      setInput
    );
    fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: firstName,
        userSurname: surname,
        userEmail: email,
        userPassword: password,
        userCity: city,
        userPhone: phoneNumber,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
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
        {firstNameError && <p>{firstNameError}*</p>}
        <label>Surname</label>
        <input
          type="text"
          placeholder="Surname"
          className="form-control"
          value={surname}
          onChange={handleChange}
          name="surname"
        />
        {surnameError && <p>{surnameError}*</p>}
        <label>Email Address</label>
        <input
          type="text"
          placeholder="Email address"
          className="form-control"
          value={email}
          onChange={handleChange}
          name="email"
        />
        {emailError && <p>{emailError}*</p>}
        <label>Confirm Email address</label>
        <input
          type="text"
          placeholder="Confirm email address"
          className="form-control"
          value={confirmEmail}
          onChange={handleChange}
          name="confirmEmail"
        />
        {confirmError && <p>{confirmError}*</p>}
        <label>City</label>
        <input
          type="text"
          placeholder="City"
          className="form-control"
          value={city}
          onChange={handleChange}
          name="city"
        />
        {cityError && <p>{cityError}*</p>}
        <label>Password</label>
        <input
          type="text"
          placeholder="Password"
          className="form-control"
          value={password}
          onChange={handleChange}
          name="password"
        />
        {passwordError && <p>{passwordError}*</p>}
        <label>Phone number</label>
        <input
          type="text"
          placeholder=""
          className="form-control"
          value={phoneNumber}
          onChange={handleChange}
          name="phoneNumber"
        />
        {phoneError && <p>{phoneError}*</p>}
        <button className="btn btn-success form-control">Submit</button>
      </form>
    </div>
  );
}
