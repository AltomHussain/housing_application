import React from 'react'
import FacebookLogin from "react-facebook-login";
import {useHistory} from "react-router-dom"
export default function LoginWithFacebook() {
    const history = useHistory()
    const handleData =(data)=>{
        console.log(data);
    }
    const responseFacebook = (response) => {
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
      <div>
        <FacebookLogin
          appId="766695197364835"
        //   client_secrect="703053617a2ab44d2be9e4abd9ce9091"
          autoLoad={true}
          fields="name,email,picture"
          onClick={handleData}
          callback={responseFacebook}
        />
        
      </div>
    );
}
