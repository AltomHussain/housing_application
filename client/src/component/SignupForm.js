import React from "react";

export default function SignupForm() {
  return (
    <div>
      <form>
        <label>First Name</label>
        <input type="text" placeholder="First name" />
        <label>Surname</label>
        <input type="text" placeholder="Surname" />
        <label>Email Address</label>
        <input type="text" placeholder="Email address" />
        <label>Confirm Email address</label>
        <input type="text" placeholder="Confirm email address" />
        <label>City</label>
        <input type="text" placeholder="City" />
        <label>Phone number</label>
        <input type="text" placeholder="" />
      </form>
    </div>
  );
}
