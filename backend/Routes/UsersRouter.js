import UsersController from "../Controllers/UsersController.js";
import express from "express";
import UsersMiddleware from "../Middlewares/UsersMiddleware.js";
const router = express.Router();

router.post("/register", UsersController.register);
router.post("/login", UsersController.login);
router.get("/islogin", UsersController.islogin);
router.get("/logout", UsersController.logout);
router.get("/users", UsersMiddleware.isadmin, UsersController.getusers);
router.post("/delete", UsersMiddleware.isadmin, UsersController.deleteuser);
export default router;
