// // src/api.js
// import axios from "axios";

// export const api = axios.create({
//   baseURL: "http://localhost:8080", 
//   // withCredentials: true, // enable if you use cookies/sessions
// });


import axios from "axios"
export const api =axios.create({
  baseURL: "http://localhost:8080",
})