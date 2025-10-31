// src/models/user.ts
import mongoose, { Schema } from "mongoose";
var UserSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    image: { type: String, required: true, default: "../../public/logo.png" },
    userclass: { type: String, required: true, unique: true, default: "SS3" },
    status: { type: String, unique: true },
    provider: { type: String }
  },
  { timestamps: true }
);
var User = mongoose.models.User || mongoose.model("User", UserSchema);
var user_default = User;

export {
  user_default
};
