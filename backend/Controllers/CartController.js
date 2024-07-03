import Cart from "../Models/CartModel.js";
export default class CartController {
  static async addProduct(req, res) {
    try {
      const { id, name, price } = req.body;
      const user = req.user;
      const cart = await Cart.findOne({ user });
      if (!cart) {
        const newCart = await Cart.create({
          user,
          products: [{ id, name, price }],
        });
        res.json({ msg: "Product added to cart successfully", newCart });
      } else {
        const product = cart.products.find((p) => p.id === id);
        if (product) {
          product.number += 1;
        } else {
          cart.products.push({ id, name, price });
        }
        await cart.save();
        res.json({ msg: "Product added to cart successfully", cart });
      }
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
  static async removeProduct(req, res) {
    try {
      const { id } = req.body;
      const user = req.user;
      const cart = await Cart.findOne({ user });
      if (!cart) {
        res.status(400).json({ error: "Cart not found" });
        return;
      }
      const product = cart.products.find((p) => p.id === id);
      if (!product) {
        res.status(400).json({ error: "Product not found" });
        return;
      }
      if (product.number > 1) {
        product.number -= 1;
      } else {
        cart.products = cart.products.filter((p) => p.id !== id);
      }
      await cart.save();
      res.json({ msg: "Product removed from cart successfully", cart });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
  static async getCart(req, res) {
    try {
      const user = req.user.id;
      console.log(req.user.id);
      const cart = await Cart.findOne({ user });
      if (!cart) {
        await Cart.create({ user, products: [] });
        res.json({ msg: "Cart created successfully", products: [] });
        return;
      }
      res.json(cart);
      return;
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
}
