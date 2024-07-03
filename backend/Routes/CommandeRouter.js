import commandeController from "../Controllers/CommandeController.js";
import express from "express";
import UserMiddleware from "../Middlewares/UsersMiddleware.js";
const router = express.Router();
router.post("/", UserMiddleware.isLogin, commandeController.addCommande);
router.get("/", UserMiddleware.isadmin, commandeController.getCommandes);
export default router;
