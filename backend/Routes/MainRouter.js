import express from "express";
import UsersRouter from "./UsersRouter.js";
import ProductsRouter from "./ProductRouter.js";
import CartRouter from "./CartRouter.js";
const router = express.Router();
router.use("/users", UsersRouter);
router.use("/Products", ProductsRouter);
router.use("/Cart", CartRouter);
export default router;
