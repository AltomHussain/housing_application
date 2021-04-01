import React from "react";
import "./AddNewHouse.css"
import { newHouseInputs1, newHouseInputs2 } from "./statics/NewHouseData";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {AddNewHouseValidation} from "./statics/AddNewHouseValidation"
export default function AddNewHouse() {
  const { register, handleSubmit, errors } = useForm();
  console.log(newHouseInputs2);
  const onSubmit = (data)=>{
    console.log(data);
  }
  return (
    <div className="new-house-container">
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Write a description about the house.</label>
          <textarea className="form-control" name="houseDescription"></textarea>
          {errors.houseDescription && "description is required."}
          <label>Is the house is been sold</label>
          <select className="form-control" name="houseSold" ref={register}>
            <option>Select</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          {errors.houseSold && "Select is required."}
          <label>What is purpose of your house</label>
          <select className="form-control" name="housePurpose" ref={register}>
            <option>Select</option>
            <option value="rent">Rent</option>
            <option value="for sale">For Sale</option>
          </select>
          {errors.housePurpose && "housePurpose is required."}
          {newHouseInputs2.inputs.map(({ id, values, name, label }) => {
            return (
              <div key={id}>
                <label>{label}</label>
                <select name={name} className="form-control" ref={register}>
                  {values.map((val) => (
                    <option value={val}>{val}</option>
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
