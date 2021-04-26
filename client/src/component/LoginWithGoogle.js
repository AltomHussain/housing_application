import React from "react";
import "./LoginForm.css";
import { useHistory } from "react-router-dom";
import GoogleLogin from "react-google-login";

export default function LoginWithGoogle() {

  const history = useHistory();
  const responseGoogle = (response) => {
    console.log(response.googleId);
    fetch(`/api/google-login/${response.googleId}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => console.log(data));
    if (response.googleId) {
      history.push("/home");
    } 
  };


  return (
    <GoogleLogin
      className="bg-danger text-white"
      clientId="900593144901-6g5jcn66ldibgdi20lqmaksb87ufdac6.apps.googleusercontent.com"
      buttonText="Login with google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
    />
  );
}
