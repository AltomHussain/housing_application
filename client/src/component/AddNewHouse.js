import React, { useState } from "react";
import "./AddNewHouse.css";
import { newHouseInputs1, newHouseInputs2 } from "./statics/NewHouseData";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AddNewHouseValidation } from "./statics/AddNewHouseValidation";
  import { toast } from "react-toastify";
  import { useHistory } from "react-router-dom";

export default function AddNewHouse() {
   let history = useHistory();
  let schema = AddNewHouseValidation();
  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });

 
  const onSubmit = (data) => {
 fetch("/api/house", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      houseType: data.houseType,
      houseDescription: data.houseDescription,
      houseSold: data.houseSold,
      streetName: data.streetName,
      housePostcode: data.housePostcode,
      housePrice: data.housePrice,
      houseCity: data.houseCity,
      houseImage: data.houseImage,
      houseNumber: data.houseNumber,
      livingRoomImage: data.livingRoomImage,
      bedRoomImage: data.bedRoomImage,
      kitchenImage: data.kitchenImage,
      housePurpose: data.housePurpose,
    }),
  })
  .then((res)=>{
    if (res.ok) {
          reset();
          toast.success("Your house been added Successfully 😄");
           window.location = "/home";
        }
        
        return res.json()})
        .then((data)=>console.log(data))
 

  };
  return (
    <div className="new-house-container">
      <h5 className="my-3 "> <a href="/home"> Back Home</a></h5>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Write a description about the house.</label>
          <textarea
            className="form-control"
            name="houseDescription"
            ref={register}
          ></textarea>
          <p className="text-center">
            {errors.houseDescription && errors.houseDescription.message}
          </p>
          <label>Is the house is been sold</label>
          <select
            name="houseSold"
            ref={register}
            className="custom-select"
          >
            <option disabled>Select</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          <p className="text-center"></p>

          <label>What is purpose of your house</label>
          <select className="custom-select" name="housePurpose" ref={register}>
            <option>Select</option>
            <option value="rent">Rent</option>
            <option value="for sale">For Sale</option>
          </select>
          {errors.housePurpose && "housePurpose is required."}
          {newHouseInputs2.inputs.map(({ id, values, name, label }) => {
            return (
              <div key={id}>
                <label>{label}</label>
                <select name={name} className="custom-select" ref={register}>
                  {values.map((val, index) => (
                    <option key={index} value={val}>
                      {val}
                    </option>
                  ))}
                </select>
                <p className="text-center">{errors[name]?.message}</p>
              </div>
            );
          })}
          {newHouseInputs1.inputs.map(({ id, type, name, label }) => {
            return (
              <div className="" key={id}>
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
          <button className="btn btn-success form-control">Submit</button>
        </form>
      </div>
    </div>
  );
}
