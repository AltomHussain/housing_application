import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "./SignupForm.css";
import { formValidation } from "./statics/FormValidation";
import content from "./statics/InputsData";

export default function SignupForm() {
  const [dbError, setDbError] = useState("");
  const [dbData, setDbData] = useState("")
  const [resCode, setRescode] = useState("")
  let schema = formValidation();
  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const test = (data) => {
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
        setRescode(res);
        return res.json();
      })
      .then((data) => setDbData(data))
      .catch((error) => setDbError(error))


  };
  const onSubmit = (data) => {
    test(data);
    if (resCode.status === 200) {
     return  reset();
    } else{
    return  console.log("hello");
    }
  };
console.log(dbError.success === "Success");
console.log("error", dbError);
console.log("data", dbData);
console.log("res", resCode.status===200);
  return (
    <div className="form-container">
      <form className="form-group" onSubmit={handleSubmit(onSubmit)}>
        <h5 className="text-center">{!dbData.success? dbData: null}</h5>
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
              <p className="text-center">{errors[name]?.message}</p>
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
