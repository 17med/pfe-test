import express from "express";
import ProductController from "../Controllers/ProducController.js";
import UserMiddleware from "../Middlewares/UsersMiddleware.js";
const router = express.Router();
import { upload } from "../Services/Upload.js";
router.post(
  "/addproduct",
  UserMiddleware.isadmin,
  upload.single("image"),
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
router.post(
  "/update",
  UserMiddleware.isadmin,
  upload.single("image"),
  ProductController.updateproduct
);
router.get( 
  "/getrandom",

  ProductController.getrandom
);
export default router;
