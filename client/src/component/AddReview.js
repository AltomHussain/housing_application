import React, { useState } from "react";
import "./AddReview.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {useParams} from "react-router-dom"
import * as yup from "yup";
  import { toast } from "react-toastify";

export default function AddReview({ getReview }) {
  const [initalVaue, setInitalVaue] = useState("");
  const scheme = yup.object().shape({
    name: yup.string().required("Field is required"),
    rating: yup.string().required("Fied is required"),
    date: yup.string().required("Please select a date"),
    description: yup.string().required("Please add a review"),
  });
  const { id } = useParams();
  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(scheme),
  });

  const onSubmit = (data) => {
    fetch(`/api/house/${id}/add-review`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        reviewerName: data.name,
        ReviewDescription: data.description,
        rating: data.rating,
        dataAdded: data.date,
      }),
    })
      .then((res) => {
        if (res.ok) {
          reset();
        }
        getReview();
         toast.success("Your review has been added Successfully 😄");
        return res.json();
      })
      .then((data) => console.log(data));
  };


  return (
      <>
    
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
        <p className="text-center text-danger">
          {errors.name && errors.name.message}
        </p>
        <label>Rating</label>
        <select
          className=" custom-select"
          name="rating"
          ref={register}
          onChange={(e) => setInitalVaue(e.target.value)}
          value={initalVaue}
          required
        >
          <option disabled>Rating</option>
          <option value="" ></option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <p className="text-center text-danger">
          {errors.rating && errors.rating.message}
        </p>
        <label>Date</label>
        <input
          type="date"
          placeholder="Name"
          className="form-control"
          name="date"
          ref={register}
        />
        <p className="text-center text-danger">
          {errors.date && errors.date.message}
        </p>
        <label>Review</label>
        <textarea
          className="form-control"
          placeholder="Add Review"
          name="description"
          ref={register}
        ></textarea>
        <p className="text-center text-danger">
          {errors.description && errors.description.message}
        </p>
        <button className="btn btn-success form-control mt-2">Add</button>
      </form>
    </div>
    </>
  );
}
