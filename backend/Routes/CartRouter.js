import CartController from "../Controllers/CartController.js";
import express from "express";
import UserMiddleware from "../Middlewares/UsersMiddleware.js";
const router = express.Router();
router.post("/addtocart", UserMiddleware.isLogin, CartController.addProduct);
router.post(
  "/deletefromcart",
  UserMiddleware.isLogin,
  CartController.removeProduct
);
router.get("/getcart", UserMiddleware.isLogin, CartController.getCart);
export default router;
