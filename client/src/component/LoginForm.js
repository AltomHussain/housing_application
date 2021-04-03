import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import {loginContent} from "./statics/InputsData"
  import {toast } from "react-toastify";

import * as yup from "yup";
import "./LoginForm.css";
import Header from "./Header";
export default function LoginForm() {
  const [clientId, setClientId] = useState()
  let history = useHistory();
  const githubClientId =()=>{
    fetch("/api/github-client-id")
    .then(res =>res.json())
    .then(data=>setClientId(data.github_client_id))
  }
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
        if (res.ok) {
          reset();

          history.push("/home")
          toast.success("Login successfully 😄");

        }
        return res.json();
      })
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="container-big">
        <Header login="Login" signup="Signup" />
        <div className="login-container">
          <form onSubmit={handleSubmit(onSubmit)} className="form-group">
            <p className="text-center">{data ? data.error : null}</p>
            {loginContent.inputs.map(({ id, type, name, label }) => {
              return (
                <div key={id}>
                  <label className="text-dark">{label}</label>
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
          <a href={`https://github.com/login/oauth/authorize?client_id${clientId}`}>
            <button className="btn btn-dark">login wit github</button>
          </a>
        </div>
      </div>
    </>
  );
}
