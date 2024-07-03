import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { connect } from "./Services/db.js";
import MainRouter from "./Routes/MainRouter.js";
import bodyParser from "body-parser";
import cors from "cors";
import urlencoded from "body-parser/lib/types/urlencoded.js";
dotenv.config();
connect();
const app = express();
app.use(express.json());
app.use(express.static("static"));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use("/api", MainRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
