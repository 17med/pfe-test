import Commande from "../Models/CommandeModel.js";
import Cart from "../Models/CartModel.js";
export default class CommandeController {
  static async addCommande(req, res) {
    try {
      const { products, total } = req.body;
      const user = req.user;
      console.log("proooooooooooooooooooooood", products);
      const newCommande = await Commande.create({
        user: user.username,
        product: products,
        total,
      });
      //delete cart
      const cart = await Cart.findOneAndDelete({ user: user.id });

      res.json({ msg: "Commande added successfully", newCommande });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
  static async getCommandes(req, res) {
    try {
      const commandes = await Commande.find();
      res.json(commandes);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
}
