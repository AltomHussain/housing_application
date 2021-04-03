// import axios from "axios"
// // require("dotenv").config();
// export default async function exchangeGithubCode (code){
//     console.log(process.env.GITHUB_CLIENT_ID);

//     axios.defaults.headers.common.accept = "application/json";
//     const { data } = await axios.post(
//       "https://github.com/login/oauth/access_token",
//       {
//         client_id: process.env.GITHUB_CLIENT_ID,
//         client_secret: process.env.GITHUB_CLIENT_SECRET,
//         code,
//       }
//     );
// }
// exchangeGithubCode()