// This connects your authControllers to your expressRoutes 
import express from "express"
import { signup , login } from "../controllers/authController.ts"
const router = express.Router();
router.post("/signup", signup);
router.post("/login" , login)
export default router