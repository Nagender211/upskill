// import {Comments} from '../db-connection/'
import { Comments } from "../db-connection/commentShema.js"
export const createComment=async(req,res)=>{
    try {
        const {username,comment}=req.body;

        if(!username || !comment){
       return res.status(401).json({message: "please fill the deatils"})
    }
        const createNew=await Comments.create({username,comment})
        res.status(201).json({
            id: createNew._id,
            username: createNew.username,
            comment: createNew.comment,
            message: "succes comment is created"
        })
    } catch (error) {
        return res.status(401).json({message: "something went wrong please try again"})
        
    }
}


export const getAllComets=async(req,res)=>{
    try {
        // const {}
        const response=await Comments.find();
        res.status(200).json({
                       data: response,
                       message: "succes"
        })
    } catch (error) {
        
    }
}

export const deleteComment=async(req,res)=>{
    const {id}=req.params;
    // const 
    try {
        const deleteComment=await Comments.findByIdAndDelete(id,{},{new: true,runValidators: true})
        res.status(200).json({
            id: deleteComment._id,
            message: "user is deleted"
        })
    } catch (error) {
        return res.status(501).json({message: "501 gate way error"})
        
    }
}

