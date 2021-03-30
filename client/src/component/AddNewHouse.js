import React from 'react'
import {newHouseInputs1} from "./statics/NewHouseData"
export default function AddNewHouse() {
    return (
      <div>
        <label>Write a description about the house.</label>
        <textarea className="form-control" name="houseDescription">
          {" "}
        </textarea>
        {newHouseInputs1.inputs.map(({id, type, name, label})=>{
            return(
                <div className="" key={id}> 
                <label>{label}</label>
                <input type={type} placeholder={label} name={name} className="form-control" />
                </div>
            )
        })}
      </div>
    );
}
