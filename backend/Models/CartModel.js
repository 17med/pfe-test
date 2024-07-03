import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ProdSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  number: {
    type: Number,
    required: true,
    default: 1,
  },
});
const CartSchema = new Schema({
  user: {
    type: String,
    required: true,
  },
  products: [ProdSchema],
});
const Cart = mongoose.model("Cart", CartSchema, "Cart");
export default Cart;
