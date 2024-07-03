import CategoryController from "../Controllers/categoryController.js";
import express from "express";
import UserMiddleware from "../Middlewares/UsersMiddleware.js";
const router = express.Router();
router.get("/getcategories", CategoryController.getCategories);
router.post(
  "/addcategory",
  UserMiddleware.isadmin,
  CategoryController.addCategory
);
router.post(
  "/deletecategory",
  UserMiddleware.isadmin,
  CategoryController.deleteCategory
);
router.post(
  "/updatecategory",
  UserMiddleware.isadmin,
  CategoryController.updateCategory
);
export default router;
