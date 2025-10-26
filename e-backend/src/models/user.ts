import mongoose, { Schema, Document, Model } from "mongoose";

// 1️⃣ Define the interface for the user document
export interface IUser extends Document{
  name : string;
  email : string;
  password:string;
  image : string;
  userclass : string;
  status? : string;
  provider? : string;
}
// 2️⃣ Create the schema with proper typing
const UserSchema: Schema<IUser> = new Schema(
  {
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    image: { type: String, required: true , default : "../../public/logo.png" },
    userclass: { type: String, required: true, unique: true, default : "SS3"},
    status: { type: String, unique: true },
    provider: { type: String },
  },
  { timestamps: true }
);

// 3️⃣ Properly type the model to avoid the "union type not callable" error
const User: Model<IUser> =
  mongoose.models.User || mongoose.model<IUser>("User", UserSchema);

// 4️⃣ Export
export default User;
