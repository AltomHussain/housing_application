import React, {useState} from "react";
import "./SignupForm.css"
export default function SignupForm() {
    const initialValues = {
        firstName:"dd",
        surname: "ff",
        email: "",
        confirmEmail: "",
        city: "",
        phoneNumber: ""
    }
    const [input, setInput] = useState(initialValues);
const { firstName, surname, email, confirmEmail, city, phoneNumber } = input;

  return (
    <div className="form-container">
      <form className="form-group">
        <label>First Name</label>
        <input
          type="text"
          placeholder="First name"
          className="form-control"
          value={firstName}
          onChange={}
          name="firstName"
        />
        <label>Surname</label>
        <input
          type="text"
          placeholder="Surname"
          className="form-control"
          value={surname}
          onChange={}
          name="surname"
        />
        <label>Email Address</label>
        <input
          type="text"
          placeholder="Email address"
          className="form-control"
          value={email}
          onChange={}
          name="email"
        />
        <label>Confirm Email address</label>
        <input
          type="text"
          placeholder="Confirm email address"
          className="form-control"
          value={confirmEmail}
          onChange={}
          name="confirmEmail"
        />
        <label>City</label>
        <input
          type="text"
          placeholder="City"
          className="form-control"
          value={city}
          onChange={}
          name="city"
        />
        <label>Phone number</label>
        <input
          type="text"
          placeholder=""
          className="form-control"
          value={phoneNumber}
          onChange={}
          name="phoneNumber"
        />
        <button className="btn btn-success form-control">Submit</button>
      </form>
    </div>
  );
}
