import Category from "../Models/CatagoryModel.js";
export default class CategoryController {
  static async addCategory(req, res) {
    Category.create(req.body)
      .then(() => res.json({ msg: "Category added successfully" }))
      .catch((err) => res.status(400).json({ error: err.message }));
  }
  static async getCategories(req, res) {
    Category.find()
      .then((categories) => res.json(categories))
      .catch((err) => res.status(400).json({ error: err.message }));
  }
  static async deleteCategory(req, res) {
    Category.findByIdAndDelete(req.body.id)
      .then(() => res.json({ msg: "Category deleted successfully" }))
      .catch((err) => res.status(400).json({ error: err.message }));
  }
  static async updateCategory(req, res) {
    try {
      await Category.findByIdAndUpdate(req.body._id, req.body);
      res.json({ msg: "Category updated successfully" });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
}
