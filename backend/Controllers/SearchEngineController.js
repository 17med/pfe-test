import ProductModel from "../Models/ProductModel.js";

class SearchEngineController {
  static async searchProduct(req, res) {
    try {
      const { search, category } = req.body;

      let products;
      if (category === "all") {
        products = await ProductModel.find({
          name: { $regex: search, $options: "i" },
        });
      } else {
        products = await ProductModel.find({
          name: { $regex: search, $options: "i" },
          category: { $in: [category] },
        });
      }

      res.json(products);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
}

export default SearchEngineController;
