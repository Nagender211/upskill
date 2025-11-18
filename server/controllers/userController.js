import {User} from "../db-connection/schema.js"
import { Todo } from "../db-connection/todoShema.js" 
import multer from "multer"

export const testing=(req,res)=>{
    console.log("testing")
    res.send("hello welcome to this website")
}
export const singup= async (req,res,next)=>{
    try {
        
        const {name,email,password} = req.body;
        if(!name || !email ||!password){
            res.status(400).json({message: "fill the all the feilds"})
        }

        const userExit= await User.findOne({email})
        if(userExit){
            return res.status(401).json({message: "user is aledy exits"})
        }
        const user = await User.create({name,email,password})
        res.status(201).json({
            id: user._id,
            name: user.name,
            email: user.email
        })
    } catch (error) {
        return next(error);
        
    }
}
export const getUser= async(req,res,next)=>{
    const getall=await User.find();
    try {
        return res.status(200).json({success: true, data: getall})
        
    } catch (error) {
        return next(error);

        
    }
    
}








export const loggin = async (req,res)=>{
    try {
        const {name,email,password}=req.body;
        if(!email ||!password){
                res.status(400).json({message: "fill the all the feilds"})
            }
        const findEmail=await User.findOne({email})
        if(!findEmail){
            return res.status(401).json({
                message: "eamil is not found please register"
            })
        }
        if(findEmail.password !== password){
            return res.status(400).json({
                message: "password is not matched"
            })
        }
        const user=await User.find({name,email,password})
        return res.status(200).json({
            id: user._id,
            name: user.name,
            email: user.email,
            password: user.password,
            message: "loggin ok"
            

        })
        } catch (error) {
            return res.status(400).json({message: "something went wrorng"})
        }
    }

    export const updateUser = async (req,res)=>{
        try {
            const { id } = req.params;
            const {name,email,password} = req.body;
            const userUp = await User.findByIdAndUpdate(id,{name,email,password}, { new: true, runValidators: true })
            return res.status(201).json({
                name:userUp.name,
                email: userUp.email,
                password: userUp.password,
                message: "updated"
            })
        } catch (error) {
                return res.status(400).json({message: "something went wrorng"})
        }
    }



    // todo applicaiton

export const todoList=async(req,res)=>{
    const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => {
    // keep original name or generate unique name
    cb(null, Date.now() + "-" + file.originalname);
  }
});

    try {
        const {title,status}=req.body;
        if(!title || !status){
            return res.status(401).json({
                message: "please fill the todo"
            })
        }
        const response=await Todo.create({title,status});
        res.status(201).json({
            id: response._id,
            title: response.title,
            message: "suuscesfuly todo is added"
        })

        
    } catch (error) {
        return res.status(400).json({message: "something went wrorng"})
        
    }
}

export const getAllTodo=async(req,res)=>{
    try {
        // const {title}=req.body;
        const response=await Todo.find();
        
        // if(!response.data){
        //     return res.status(401).json({message: "no title are found"})
        // }
        // console.log("response",response[1])
        if(!response){
            return res.status(401).json({message: "not found"})
        }
        res.status(200).json({
            data: response,
            success: true
            
        })
    } catch (error) {
        return res.status(401).json({message: "something went wrong"})
        
    }
}




export const updateTodo=async(req,res)=>{
    try {
    const {id}=req.params;
    const {title,status}=req.body
    if(!title || !status){
        return res.status(401).json({
                message: "please fill the todo"
            })
    }
    const response=await Todo.findByIdAndUpdate(id,{title,status},{new: true, runValidators: true});
    // return
    res.status(201).json({
        id: response._id,
        title: response.title,
        message: "todo title is updated please contine"
    })

    } catch (error) {
        return res.status(401).json({message: "something went wtrong please try again"})
        
    }
}
export const deleateUser= async(req,res)=>{
    try {
        const {id}=req.params;
        // const 
        // const 
        console.log(id)
        const deleted=await User.findByIdAndDelete(id,{},{new: true,runValidators: true});
        // deleted
        res.status(200).json({
            id: deleted._id,
            message: "user is deleted",  
        })
    } catch (error) {
        return res.status(501).json("gateway error")
        
    }

}

export const deletTodo=async(req,res)=>{
    try {
            const {id}=req.params;
            const todoDelet=await Todo.findByIdAndDelete(id,{},{new: true,runValidators: true});
            res.status(200).json({
                id: todoDelet._id,
                message: "todo is deleted"
            })
    } catch (error) {
        return res.status(501).json({message: "gate way request bad"})
        
    }
}


export const httpReq=(req,res)=>{
    try {
        res.status(200).json({
            message: "this is the new http requests"
        })
    } catch (error) {
        console.log("error",error)
        
    }
}