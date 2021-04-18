
import React from 'react'
import FacebookLogin from "react-facebook-login";
export default function FacebookLoing() {
  const responseFacebook = (response)=>{
    console.log(response);
  }
  return (
    <div>
      <FacebookLogin
        appId="1088597931155576"
        autoLoad={true}
        fields="name,email,picture"
        callback={responseFacebook}
       Class="my-facebook-button-class"
        icon="fa-facebook"
      />
  
    </div>
  );
}
