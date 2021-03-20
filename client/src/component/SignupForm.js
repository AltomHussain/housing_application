import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "./SignupForm.css";
import { sendErrors } from "./Errors";
import content from "./statics/InputsData";
import * as yup from "yup";

export default function SignupForm() {

  console.log(useForm());
  let schema = yup.object().shape({
    firstName: yup.string().required("s;lakfdj"),
    surname: yup.string().required(),
     email: yup.string().required(),
     password: yup.string().required().min(5),
  confirmEmail: yup.string().required(),
    // city: yup.string().required(),
    // phoneNumber: yup.number().required().positive().integer(),
  });
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  // const [input, setInput] = useState({
  //   firstName: "",
  //   surname: "",
  //   email: "",
  //   confirmEmail: "",
  //   password: "",
  //   city: "",
  //   phoneNumber: "",
  // });

  // const [firstNameError, setFirstNameError] = useState("");
  // const [surnameError, setSurnameError] = useState("");
  // const [emailError, setEmailError] = useState("");
  // const [confirmError, setConfirmError] = useState("");
  // const [passwordError, setPasswordError] = useState("");
  // const [cityError, setcityError] = useState("");
  // const [phoneError, setPhoneError] = useState("");
  // const [isValid, setIsValid] = useState(false);
  // const {
  //   firstName,
  //   surname,
  //   email,
  //   confirmEmail,
  //   city,
  //   phoneNumber,
  //   password,
  // } = input;

  // console.log(isValid === true);
  // const handleChange = (e) => {
  //   const updateValues = {
  //     ...input,
  //     [e.target.name]: e.target.value,
  //   };
  //   setInput(updateValues);
  // };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   sendErrors(
  //     firstName,
  //     surname,
  //     email,
  //     confirmEmail,
  //     password,
  //     city,
  //     phoneNumber,
  //     setFirstNameError,
  //     setSurnameError,
  //     setEmailError,
  //     setConfirmError,
  //     setcityError,
  //     setPhoneError,
  //     setPasswordError,
  //     setInput,
  //     setIsValid
  //   );

  //   test();
  // };
  // console.log(content.inputs);
  // const test = () => {
  //   fetch("/api/register", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       userName: firstName,
  //       userSurname: surname,
  //       userEmail: email,
  //       userPassword: password,
  //       userCity: city,
  //       userPhone: phoneNumber,
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => console.log(data))
  //     .catch((error) => console.log(error));
  // };
  const onSubmit = (data) => console.log(data);
 console.log(errors);
  return (
    <div className="form-container">
      <form className="form-group" onSubmit={handleSubmit(onSubmit)}>
        {content.inputs.map((input, index) => {
          return (
            <div key={index}>
              <label>{input.label}</label>
              <input
                type={input.type}
                placeholder={input.label}
                name={input.name}
                className="form-control"
                ref={register}
              />
           
            </div>
          );
        })}

        {/* <label>First Name</label>
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
        {phoneError && <p>{phoneError}*</p>} */}
        <button type="submit" className="btn btn-success form-control">
          Submit
        </button>
      </form>
    </div>
  );
}
