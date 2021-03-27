import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "./SignupForm.css";
import { useHistory } from "react-router-dom";
import { formValidation } from "./statics/FormValidation";
import content from "./statics/InputsData";
import Header from "./Header";

export default function SignupForm() {
  let history = useHistory();
  const [dbData, setDbData] = useState("");
  let schema = formValidation();
  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const sendData = (data) => {
    fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: data.firstName,
        userSurname: data.surname,
        userEmail: data.email,
        userPassword: data.password,
        userCity: data.city,
        userPhone: data.phoneNumber,
      }),
    })
      .then((res) => {
        if (res.ok) {
          reset();
          history.push("/home");
        }
        return res.json();
      })
      .then((data) => setDbData(data))
      .catch((error) => console.log(error));
  };

  const onSubmit = (data) => {
    sendData(data);
  };
  let back = <i className="fas fa-long-arrow-alt-left me-2">Back</i>;
  return (
    <div className="container-big">
      <Header back={back} />
      <div className="form-container">
        <form className="form-group" onSubmit={handleSubmit(onSubmit)}>
          <h5 className="text-center">{!dbData.success ? dbData : null}</h5>
          {content.inputs.map(({ type, id, label, name }) => {
            return (
              <div key={id}>
                <label className="signup-label">{label}</label>
                <input
                  type={type}
                  placeholder={label}
                  name={name}
                  className="form-control"
                  ref={register}
                />
                <p className="text-center">{errors[name]?.message}</p>
              </div>
            );
          })}
          <button type="submit" className="btn btn-success form-control">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
