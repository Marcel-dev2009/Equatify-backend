import type { Request , Response } from "express"
import bcrypt from "bcryptjs"
import connectDB from "../config/db.ts"
import dotenv from "dotenv"
import  Jwt  from "jsonwebtoken"
import User from "../models/user.ts"
dotenv.config();
const JWT = process.env.JWT_SECRET as string;

//SignUp
export const signup = async (req:Request , res:Response) => {
           await connectDB();    
  try{
 
   const {name , email , password , status , userclass} = req.body;
   const existingUser = await User.findOne({email}).select("_id");
   if(existingUser) return res.status(400).json({message : "User Already Exists"})
    const hashedPassword = await bcrypt.hash(password , 10);
   const newuser = await User.create({name , email , password: hashedPassword , status , userclass});
   res.status(201).json({message : "Signup Successful" , user : newuser})      
  }catch(err) {
   res.status(500).json({message:"Server error" , error : err})
  }
};

//Login
export const login = async (req:Request , res:Response) => {
  try{
   const {email , password} = req.body
   const user = await User.findOne({email}); // Might add a method later
   if(!user) return res.status(400).json({message:"Invalid Credentaials"})
   const isPasswordValid = await bcrypt.compare(password , user.password);
if(!isPasswordValid) return res.status(400).json({message : "Invalid password"})
  const token = Jwt.sign({id:user._id} , JWT , {expiresIn : "7d"});
 res.json({message : "Login Successful" , token , user});
  } catch(err){
   res.status(500).json({message:"Server error" , error:err})
  }       
}