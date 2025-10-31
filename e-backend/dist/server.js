import {
  authRoutes_default
} from "./chunk-GVSMWQVF.js";
import "./chunk-WFVLEE2Z.js";
import {
  connectDB
} from "./chunk-OEN2FV6I.js";
import "./chunk-YENUKEAE.js";

// src/server.ts
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
connectDB();
var app = express();
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes_default);
app.get("/", (res, req) => {
  res.send("Equatify Backend Is running");
});
app.listen(process.env.PORT || 5e3, () => {
  console.log(`Server running on ${process.env.PORT}`);
});
