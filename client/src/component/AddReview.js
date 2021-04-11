import React from 'react'
import "./AddReview.css"
export default function AddReview() {
    return (
      <div className="add-review-container">
          <h3 className="text-center">Add Review</h3>
          <form>
        <label>Name</label>
        <input type="text" placeholder="Name" className="form-control" />
        <label>Rating</label>
        <select className="form-control">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <label>Date</label>
        <input type="date" placeholder="Name" className="form-control" />
        <label>Review</label>
        <textarea className="form-control" placeholder="Add Review" ></textarea>
    
    <button className="btn btn-success form-control mt-2">Add</button>
    </form>
      </div>
    );
}
