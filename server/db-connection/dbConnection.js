import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config(); 

const mongoConnection=process.env.MONGO_URL;
console.log(process.env.TEST)
export const dbConnection=()=>{
    try {
        mongoose.connect(mongoConnection);
        console.log("mongooes is connected")
    } catch (error) {
        console.log(error)
    }
}
// import mongoose from "mongoose";
// import dotenv from "dotenv"
// dotenv.config();
// const mongoUrl=process.env.MONGO_URL;
// export const dbConnection = async()=>{
//     try {
//         await mongoose.connect(mongoUrl,{},(
//             console.log("db is connect happy")
//         ))
//     } catch (error) {
//         console.log("sorry we can't connect to db check the connection",error);
        
//         // return 
        
//     }
// }