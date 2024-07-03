import mongoose from "mongoose";
const Schema = mongoose.Schema;

const commandeSchema = new Schema({
  user: {
    type: String,
    required: true,
  },
  product: {
    type: [JSON],
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
const commande = mongoose.model("commandes", commandeSchema, "commandes");

export default commande;
