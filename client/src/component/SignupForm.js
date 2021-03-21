import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "./SignupForm.css";

import content from "./statics/InputsData";
import * as yup from "yup";

export default function SignupForm() {
  console.log(useForm());

  let schema = yup.object().shape({
    firstName: yup.string().required("First name is required!"),
    surname: yup.string().required("Surname is required!"),
    email: yup
      .string()
      .required("Email is required !")
      .email("Email is invalid"),
    confirmEmail: yup
      .string()
      .oneOf([yup.ref("email"), null], "email must match")
      .required("Field is required please fill it !"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
    city: yup.string().required("City is required!"),
    phoneNumber: yup.number().required().positive(),
  });
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

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

  return (
    <div className="form-container">
      <form className="form-group" onSubmit={handleSubmit(onSubmit)}>
        {content.inputs.map(({ type, id, label, name }) => {
        
          return (
            <div key={id}>
              <label>{label}</label>
              <input
                type={type}
                placeholder={label}
                name={name}
                className="form-control"
                ref={register}
              />
              <p>{errors[name]?.message}</p>
            </div>
          );
        })}
        <button type="submit" className="btn btn-success form-control">
          Submit
        </button>
      </form>
    </div>
  );
}
