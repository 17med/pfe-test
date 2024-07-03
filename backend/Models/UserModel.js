import mongoose from "mongoose";
const Schema = mongoose.Schema;
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  tel: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isadmin: {
    require: false,
    type: Boolean,
    default: false,
  },
});
const User = mongoose.model("User", userSchema, "Users");

export default User;
