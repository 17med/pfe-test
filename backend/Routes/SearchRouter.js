import express from "express";
import SearchEngineController from "../Controllers/SearchEngineController.js";
const router = express.Router();

router.post("/", SearchEngineController.searchProduct);

export default router;
