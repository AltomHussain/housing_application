import React from 'react'
import FacebookLogin from "react-facebook-login";
export default function LoginWithFacebook() {
    const responseFacebook = (response) => {
      console.log(response);
    };
    return (
      <div>
        <FacebookLogin
          appId="766695197364835"
          autoLoad={true}
          fields="name,email,picture"
          onClick={responseFacebook}
          callback={responseFacebook}
        />
        ,
      </div>
    );
}
