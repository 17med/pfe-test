import express from "express";
import ProductController from "../Controllers/ProducController.js";
import UserMiddleware from "../Middlewares/UsersMiddleware.js";
const router = express.Router();

router.post(
  "/addproduct",
  UserMiddleware.isadmin,
  ProductController.addProduct
);
router.post(
  "/deleteproduct",
  UserMiddleware.isadmin,
  ProductController.deleteProduct
);
router.get(
  "/getallproducts",
  UserMiddleware.isadmin,
  ProductController.getallproducts
);
export default router;
