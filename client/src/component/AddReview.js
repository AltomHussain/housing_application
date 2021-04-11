import React, { useState } from "react";
import "./AddReview.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
export default function AddReview() {
    const [initalVaue, setInitalVaue] = useState("Rating");
  const scheme = yup.object().shape({
    name: yup.string().required("Field is required"),
    rating: yup.string().required("Fied is required"),
    date: yup.string().required("Please select a date"),
    description: yup.string().required("Please add a review"),
  });

  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(scheme),
  });

  const onSubmit = (data) =>{
      console.log(data);
  }
  return (
    <div className="add-review-container">
      <h3 className="text-center">Add Review</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <input
          type="text"
          placeholder="Name"
          className="form-control"
          name="name"
          ref={register}
        />
        <p> {errors.name && errors.name.message}</p>
        <label>Rating</label>
        <select
          className=" custom-select"
          name="rating"
          ref={register}
          onChange={(e) => setInitalVaue(e.target.value)}
          value={initalVaue}
        >
          <option disabled>Rating</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option> 
        </select>
       <p> {initalVaue==="rating" ? "please select": ""}</p>
        <p> {errors.rating && errors.rating.message}</p>
        <label>Date</label>
        <input
          type="date"
          placeholder="Name"
          className="form-control"
          name="date"
          ref={register}
        />
        <p> {errors.date && errors.date.message}</p>
        <label>Review</label>
        <textarea
          className="form-control"
          placeholder="Add Review"
          name="description"
          ref={register}
        ></textarea>
        <p> {errors.description && errors.description.message}</p>
        <button className="btn btn-success form-control mt-2">Add</button>
      </form>
    </div>
  );
}
