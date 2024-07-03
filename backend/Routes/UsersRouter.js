import UsersController from "../Controllers/UsersController.js";
import express from "express";
const router = express.Router();
router.post("/register", UsersController.register);
router.post("/login", UsersController.login);
router.get("/islogin", UsersController.islogin);
router.get("/logout", UsersController.logout);
export default router;
