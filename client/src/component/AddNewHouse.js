import React from 'react'
import { newHouseInputs1, newHouseInputs2 } from "./statics/NewHouseData";
export default function AddNewHouse() {
    console.log(newHouseInputs2);
    return (
      <div>
        <label>Write a description about the house.</label>
        <textarea className="form-control" name="houseDescription">
          {" "}
        </textarea>
        {newHouseInputs2.inputs.map(({id, type, name, label})=>{
            return(
<select>
    <option
</select>
            )
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
      </div>
    );
}
