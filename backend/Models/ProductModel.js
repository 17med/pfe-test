import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: String,
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: [String],
    default: [],
  },
  img: String,
});

const Category = mongoose.model("Product", ProductSchema, "Products");

export default Category;
