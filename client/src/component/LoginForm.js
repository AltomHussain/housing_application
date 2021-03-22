import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./LoginForm.css"
export default function LoginForm() {
     let schema = yup.object().shape({
       email: yup
         .string()
         .required("Email is required !")
         .email("Email is invalid"),
       password: yup
         .string()
         .required("Password is required")
         .min(6, "Password must be at least 6 characters"),
     });
 const { register, handleSubmit, errors, reset } = useForm({
   resolver: yupResolver(schema),
 });
const onSubmit = (data) =>console.log(data);
console.log(errors);
    return (
        <div className="login-container">
            <form onSubmit={handleSubmit(onSubmit)}>
            <label >Email</label>
            <input type="email" name="email" className="form-control" placeholder="email" ref={register} />
            <label >Password</label>
            <input type="password" name="password" className="form-control" placeholder="password" ref={register} />
            <button className="btn btn-success form-control" type="submit">Submit</button>
       </form> 
       </div>
    )
}
