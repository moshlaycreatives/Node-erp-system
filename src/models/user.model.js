import mongoose, { model, Schema } from "mongoose";

const userSchema = new Schema({}, { timestamps: true, collection: "Users" });

export const User = model("User", userSchema);
