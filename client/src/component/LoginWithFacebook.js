import React from 'react'
import FacebookLogin from "react-facebook-login";
export default function LoginWithFacebook() {
    const responseFacebook = (response) => {
    //   console.log((response?response.id: ""));
    //   fetch("/api/facebook-login", {
    //       method: "POST",
    //       headers: {"Content-Type": "application/json"},
    //       body: JSON.stringify({
    //           id: response
    //       })
    //   })
    //   .then(res=> res.json())
    //   .then(data=>console.log(data))
    };
    return (
      <div>
        <FacebookLogin
          appId="766695197364835"
        //   client_secrect="703053617a2ab44d2be9e4abd9ce9091"
          autoLoad={true}
          fields="name,email,picture"
          onClick={()=>responseFacebook()}
          callback={responseFacebook}
        />
        
      </div>
    );
}
