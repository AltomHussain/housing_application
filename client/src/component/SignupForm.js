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
  //   const { firstName, surname, email, confirmEmail, city, phoneNumber } = input;
  const handleChange = (e) => {
    const updateValues = {
      ...input,
      [e.target.name]: e.target.value,
    };
    setInput(updateValues);
  };
  console.log(input.firstName === "");
  const handleSubmit = (e) => {
    e.preventDefault();
    const fill = "Please fill the field";
    if (input.firstName === "") {
     return setFirstNameError(fill);
    } else {
      setFirstNameError("");
    }

    if (input.surname === "") {
     return setSurnameError(fill);
    } else {
      setSurnameError("");
    }

    if (input.email === "") {
     return setEmailError(fill);
    } else {
      setEmailError("");
    }
    if (input.confirmEmail === "") {
     return setConfirmError(fill);
    } else {
      setConfirmError("");
    }
    if (input.city === "") {
     return setcityError(fill);
    } else {
      setcityError("");
    }
    if (input.phoneNumber === "") {
     return setPhoneError(fill);
    } else {
      setPhoneError("");
    }
    return setInput({
      firstName: "",
      surname: "",
      email: "",
      confirmEmail: "",
      city: "",
      phoneNumber: "",
    });
  };

  return (
    <div className="form-container">
      <form className="form-group" onSubmit={handleSubmit}>
        <label>First Name</label>
        <input
          type="text"
          placeholder="First name"
          className="form-control"
          value={input.firstName}
          onChange={handleChange}
          name="firstName"
        />
        {firstNameError && <p>{firstNameError}*</p>}
        <label>Surname</label>
        <input
          type="text"
          placeholder="Surname"
          className="form-control"
          value={input.surname}
          onChange={handleChange}
          name="surname"
        />
        {surnameError && <p>{surnameError}*</p>}
        <label>Email Address</label>
        <input
          type="text"
          placeholder="Email address"
          className="form-control"
          value={input.email}
          onChange={handleChange}
          name="email"
        />
        {emailError && <p>{emailError}*</p>}
        <label>Confirm Email address</label>
        <input
          type="text"
          placeholder="Confirm email address"
          className="form-control"
          value={input.confirmEmail}
          onChange={handleChange}
          name="confirmEmail"
        />
        {confirmError && <p>{confirmError}*</p>}
        <label>City</label>
        <input
          type="text"
          placeholder="City"
          className="form-control"
          value={input.city}
          onChange={handleChange}
          name="city"
        />
        {cityError && <p>{cityError}*</p>}
        <label>Phone number</label>
        <input
          type="text"
          placeholder=""
          className="form-control"
          value={input.phoneNumber}
          onChange={handleChange}
          name="phoneNumber"
        />
        {phoneError && <p>{phoneError}*</p>}
        <button className="btn btn-success form-control">Submit</button>
      </form>
    </div>
  );
}
