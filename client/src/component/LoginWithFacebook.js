import React from 'react'
import FacebookLogin from "react-facebook-login";
import {useHistory} from "react-router-dom"
import "./LoginSocialStyling.css"; 
export default function LoginWithFacebook() {
    const history = useHistory()
    const handleData =(data)=>{
        console.log(data);
    }
    const responseFacebook = (response) => {
      console.log(response);
      fetch("/api/facebook-login", {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({
              id: response.id,
              name: response.name,
              email: response.email
          })
      })
      .then(res=> res.json())
      .then(data=>console.log(data))
      if (response.id) {
        history.push("/home");
      }
    };
    return (
      <FacebookLogin
        className="face-book pt-2"
        appId="1291524107911042"
        autoLoad={false}
        fields="name,email,picture"
        onClick={handleData}
        callback={responseFacebook}
      />
    );
}
