import React from "react";
import "./AddNewHouse.css"
import { newHouseInputs1, newHouseInputs2 } from "./statics/NewHouseData";
export default function AddNewHouse() {
  console.log(newHouseInputs2);
  return (
    <div className="new-house-container">
      <div>
        <form>
          <label>Write a description about the house.</label>
          <textarea className="form-control" name="houseDescription"></textarea>
          <label>Is the house is been sold</label>
          <select className="form-control" name="houseSold">
            <option>Select</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          {newHouseInputs2.inputs.map(({ id, values, name, label }) => {
            return (
              <div key={id}>
                <label>{label}</label>
                <select name={name} className="form-control">
                  {values.map((val) => (
                    <option value={val}>{val}</option>
                  ))}
                </select>
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
                />
              </div>
            );
          })}
          <button className="btn btn-success form-control" >Submit</button>
        </form>
      </div>
    </div>
  );
}
