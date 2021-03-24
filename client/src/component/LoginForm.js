import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import {loginContent} from "./statics/InputsData"
import * as yup from "yup";
import "./LoginForm.css";
import Header from "./Header";
export default function LoginForm() {
    let history = useHistory();
  const [data, setData] = useState(null);
  let schema = yup.object().shape({
    email: yup
      .string()
      .required("*Email is required !")
      .email("*Email is invalid !"),
    password: yup
      .string()
      .required("*Password is required !")
      .min(6, "*Password must be at least 6 characters !"),
  });
  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userEmail: data.email,
        userPassword: data.password,
      }),
    })
      .then((res) => {
        if(res.ok){
          reset();
          history.push("/home")
        }
        return res.json();
      })
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  };


  return (
    <>
    <Header />
    <div className="login-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <p className="text-center">{data? data.error: null}</p>
        {loginContent.inputs.map(({id, type, name, label})=>{
          return (
            <div key={id}>
              <label>{label}</label>
              <input
                type={type}
                className="form-control"
                name={name}
                ref={register}
              />
              <p className="text-center">{errors[name]?.message}</p>
            </div>
          );
        })}

        <button className="btn btn-success form-control" type="submit">
          Submit
        </button>
      </form>
      <Link to="/signup">Sing Up</Link>
      <Link to="/home">home</Link>
    </div>
  </>);
}
