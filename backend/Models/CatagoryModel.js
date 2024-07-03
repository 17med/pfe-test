import mongoose from "mongoose";
const Schema = mongoose.Schema;
const catagorySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});
const Category = mongoose.model("Category", catagorySchema, "Category");

export default Category;
