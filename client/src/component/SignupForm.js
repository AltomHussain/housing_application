import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "./SignupForm.css";

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
    city: yup.string().required(),
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
  console.log(errors);
  return (
    <div className="form-container">
      <form className="form-group" onSubmit={handleSubmit(onSubmit)}>
        {content.inputs.map((input, index) => {
          console.log(input.name);
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
              <p>{errors[input.name]?.message}</p>
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
