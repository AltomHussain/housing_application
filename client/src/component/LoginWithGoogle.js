import React from 'react'
import  GoogleLogin from "react-google-login";

export default function LoginWithGoogle() {
    const responseGoogle = (response) => {
  console.log(response.googleId);
  fetch("/api/google-login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      googleId: response.googleId,
    }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
};

    return (
      <div>
        <GoogleLogin
          clientId="946125261635-npql908rnqqpuest0r0p05p631v9oc1i.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </div>
    );
}
