import mongoose, { Schema } from "mongoose";
const mongoSchma=new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is requiredd"],
    },
    email: {
        type: String,
        required: [true, "Email Id is requireds"],
        validate: {
      validator: v => /^\S+@\S+\.\S+$/.test(v),
      message: "Email is invalid"
    }
    },
    password: {
        type: String,
        required: [true,"phone numner is required"],
    }

});
export const User=mongoose.model("User",mongoSchma)


// import mongoose from "mongoose";
// const useSchem=new mongoose.Schema({
//     name:{
//         type: String,
//         required: [true,"name is required"],
//     },
//      email:{
//         type: String,
//         required: [true,"email is required"],
//         validate: {
//       validator: v => /^\S+@\S+\.\S+$/.test(v),
//       message: "Email is invalid"
//     }
//     },
//    password: {
//         type: String,
//         required: [true,"phone numner is required"],
//     }
// })
// export const User=mongoose.model("User",useSchem);
