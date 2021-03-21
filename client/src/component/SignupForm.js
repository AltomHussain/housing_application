import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "./SignupForm.css";
import {formValidation} from "./statics/FormValidation"
import content from "./statics/InputsData";


export default function SignupForm() {

let schema = formValidation()

  const { register, handleSubmit, errors, reset } = useForm({
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
  const onSubmit = (data) =>{
    console.log("befor", data);
    reset();
    console.log("after", data);
  } 

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
