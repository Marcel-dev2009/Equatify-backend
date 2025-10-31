import {
  login,
  signup
} from "./chunk-WFVLEE2Z.js";

// src/routes/authRoutes.ts
import express from "express";
var router = express.Router();
router.post("/signup", signup);
router.post("/login", login);
var authRoutes_default = router;

export {
  authRoutes_default
};
