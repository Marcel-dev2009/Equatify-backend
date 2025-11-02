import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectDB from "./config/db.ts";
import authRoutes from "./routes/authRoutes.ts";
import type { Response , Request } from "express";
dotenv.config();
connectDB();
const app = express();
  app.use(cors());
  app.use(express.json()); // To understand Login and SignUp requets and operations
  app.use("/api/auth" , authRoutes)
  app.get("/" , (req : Request ,  res : Response) => {
      res.send("Equatify backend is up and running ")// When the frontend visits the root "/" a message is send that the backend works fine     
  });
  app.listen(process.env.PORT || 5000 , () => {
    console.log(`Server running on ${process.env.PORT}`)       
}) //This listens to the frontend we send responses to 