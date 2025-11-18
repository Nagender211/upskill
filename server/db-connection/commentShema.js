import mongoose from "mongoose";
const mongoShema=new mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    comment: {
        type: String,
        require: true
    }
})
export const Comments=mongoose.model("Comments",mongoShema)