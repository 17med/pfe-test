import Cart from "../Models/CartModel.js";
export default class CartController {
  static async addProduct(req, res) {
    try {
      const { _id, name, price, amount } = req.body;
      const user = req.user;

      const cart = await Cart.findOne({ user: user.id });

      if (!cart) {
        const newCart = await Cart.create({
          user,
          products: [
            {
              id: req.body._id,
              name: name,
              price: price,
              amount: amount,
            },
          ],
        });
        res.json({ msg: "Product added to cart successfully", newCart });
      } else {
        console.log(cart.products);
        var product = cart.products.find((p) => p.id === req.body._id);
        if (product) {
          product.amount += 1;
        } else {
          cart.products.push({
            id: req.body._id,
            name: name,
            price: price,
            amount: amount,
          });
          console.log(cart.products, {
            id: req.body._id,
            name: name,
            price: price,
            amount: amount,
          });
        }
        await cart.save();
        res.json({
          msg: "Product added to cart successfully",
          cart: cart.products,
        });
      }
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
  static async removeProduct(req, res) {
    try {
      const { id } = req.body;
      const user = req.user;
      console.log(user);
      const cart = await Cart.findOne({ user: user.id });
      if (!cart) {
        res.status(400).json({ error: "Cart not found" });
        return;
      }
      const product = cart.products.find((p) => p.id === id);
      if (!product) {
        res.status(400).json({ error: "Product not found" });
        return;
      }
      if (product.amount > 1) {
        product.amount -= 1;
      } else {
        cart.products = cart.products.filter((p) => p.id !== id);
      }
      await cart.save();
      res.json({
        msg: "Product removed from cart successfully",
        cart: cart.products,
      });
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
