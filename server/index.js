import express from "express";
import router from './routes/route.js';
import { dbConnection } from "./db-connection/dbConnection.js";
import cors from 'cors'
const app=express();
const PORT=8080;
app.use(cors());          
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use((req, _res, next) => {
//   console.log(`[${req.method}] ${req.originalUrl}`);
//   console.log("Content-Type:", req.headers["content-type"]);
//   console.log("Body:", req.body);
//   next();
// });
app.use(router);
dbConnection();
// app.get('/',(req,res)=>)
app.listen(PORT,()=>{
    console.log("app is running in the 8080 port")
})
