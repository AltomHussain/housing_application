import React from "react";
import "./LoginForm.css";
import { useHistory } from "react-router-dom";
import GoogleLogin from "react-google-login";

export default function LoginWithGoogle() {

  const history = useHistory();
  const responseGoogle = (response) => {
    console.log(response);
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
      clientId="900593144901-q3g2dsg7ib6nhj447ser6vqk149e2os1.apps.googleusercontent.com"
      buttonText="Login with google"
      // uxMode="redirect"
      // redirectUri="https://housing-application.herokuapp.com/home/"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
    />
  );
}
