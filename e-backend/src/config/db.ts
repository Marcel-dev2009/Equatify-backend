import dotenv from "dotenv"
import mongoose from "mongoose";
dotenv.config();
export default async function connectDB(){
  const uri = process.env.MONGODB_URI as string;
 if(!uri) console.log("MONGODB_URI wasn't set as an Envrionment Variable");
  try{
    await mongoose.connect(uri);
    console.log("Connected Succesfully to your database")
  }catch(err){
   console.error("Error Connecting to your database" , err)
  } 
}