import axios from "axios"
require("dotenv").config();
export default async function exchangeGithubCode (code){
  
    axios.defaults.headers.common.accept = "application/json";
    const { data } = await axios.post(
      "https://github.com/login/oauth/access_token",
      {
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
      }
    );
    return (
        await axios.get("https://api.github.com/user", {
        headers: {Authorization: `token ${data.access_token}`},
    })
    ).data
    
    
}
