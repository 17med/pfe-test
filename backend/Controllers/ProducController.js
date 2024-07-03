import { upload } from "../Services/Upload.js";
import Product from "../Models/ProductModel.js";
import fs from "fs";
import path from "path";
export default class ProductController {
  static async addProduct(req, res) {
    try {
      const { name, price, category, description } = req.body;
      console.log(req.body);
      const productImage = req.file ? req.file.filename : "";

      const product = await Product.create({
        name,
        price,
        category,
        description,
        img: productImage,
      });

      res.json({ msg: "Product added successfully", product });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  static async getallproducts(req, res) {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
  static async setcategory(req, res) {
    try {
      const { id, category } = req.body;
      const product = await Product.findByIdAndUpdate(id, { category });
      res.json({ msg: "Category updated successfully", product });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
  static async deleteProduct(req, res) {
    try {
      const { id } = req.body;
      const product = await Product.findByIdAndDelete(id);
      const filePath = path.join(
        process.cwd(),
        "static",
        "products",
        product.img
      );
      console.log("delete", filePath);
      try {
        await fs.unlinkSync(filePath);
      } catch (err) {
        console.log(err);
      }
      res.json({ msg: "Product deleted successfully", product });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
  static async updateproduct(req, res) {
    try {
      const { id, name, price, category } = req.body;
      var productImage = req.file ? req.file.filename : "";
      if (productImage !== "") {
        const product = await Product.findByIdAndUpdate(id, {
          name,
          price,
          category,
          img: productImage,
        });
      } else {
        const product = await Product.findByIdAndUpdate(id, {
          name,
          price,
          category,
        });
      }

      res.json({ msg: "Product updated successfully" });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
  static async getrandom(req, res) {
    try {
      const products = await Product.aggregate([{ $sample: { size: 4 } }]);
      res.json(products);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
}
