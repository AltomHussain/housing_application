import React from 'react'
import "./LoginForm.css"
import  {useHistory} from "react-router-dom"
import  GoogleLogin from "react-google-login";

export default function LoginWithGoogle() {
  const history = useHistory()
    const responseGoogle = (response) => {
    
   if(response.googleId){
   history.push("/home");
  } 
};

    return (
     
        <GoogleLogin
        className="bg-danger text-white"
          clientId="946125261635-npql908rnqqpuest0r0p05p631v9oc1i.apps.googleusercontent.com"
          buttonText="Login with google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
    );
}
