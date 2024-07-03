import { isadmin, verifyJWT } from "../Services/Auth.js";
export default class UsersMidlleware {
  static async validateUser(req, res, next) {
    const { username, tel, email, password } = req.body;
    if (!username || !tel || !email || !password) {
      res.status(400).json({ error: "All fields are required ax" });
    }
    next();
  }
  static async validateLogin(req, res, next) {
    const { username, password } = req.body;
    if (!username || !password) {
      res.status(400).json({ error: "All fields are required" });
      return;
    }
    next();
  }
  static async isLogin(req, res, next) {
    const token = req.cookies.token;
    if (!token) {
      res.status(401).json({ error: "Unauthorized" });
      return;
    }
    req.user = verifyJWT(token).decoded;
    
    next();
  }
  static async isadmin(req, res, next) {
    const token = req.cookies.token;
    if (!token) {
      res.status(401).json({ error: "Unauthorized" });
      return;
    }
    if (isadmin(token)) {
      next();
    } else {
      res.status(401).json({ error: "Unauthorized" });
    }
  }
}
