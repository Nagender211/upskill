import mongoose from "mongoose";
const mongoShema=new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    status: {
        type: String,
        require: true
    }
})
export const Todo=mongoose.model("Todo",mongoShema)