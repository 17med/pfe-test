import User from "../Models/UserModel.js";
import bcrypt from "bcrypt";
import { createtoken, verifyJWT } from "../Services/Auth.js";
export default class UserController {
  static async register(req, res) {
    try {
      const { username, tel, email, password } = req.body;
      console.log(req.body);
      //const salt = bcrypt.genSaltSync(10);
      const password2 = await bcrypt.hashSync(password, 10);

      const user = await User.create({
        username,
        tel,
        email,
        password: password2,
      });
      user.save();
      res.json({ msg: "User created successfully" });
      return;
    } catch (err) {
      console.log(err);
      res.status(400).json({ error: err.message });
    }
  }
  static async login(req, res) {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username: username });
      if (!user) {
        res.status(400).json({ error: "User not found" });
      } else if (await bcrypt.compare(user.password, password)) {
        res.status(400).json({ error: "Password is incorrect" });
      } else {
        res
          .cookie(
            "token",
            createtoken({
              username,
              tel: user.tel,
              email: user.email,
              isadmin: user.isadmin,
              id: user._id,
            }),
            { maxAge: 360000 }
          )
          .json({
            msg: "User logged in successfully",
            user: user.username,
            id: user._id,
            isadmin: user.isadmin,
          });
      }
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
  static async islogin(req, res) {
    const token = req.cookies.token;
    const { valid, expired, decoded } = verifyJWT(token);
    if (!valid) {
      res.status(401).json({ error: "Unauthorized" });
      return;
    }
    if (expired) {
      res.status(401).json({ error: "Token expired" });
      return;
    }
    res.json(decoded);
    return;
  }
  static async logout(req, res) {
    res.clearCookie("token").json({ msg: "Logged out successfully" });
  }
  static async getusers(req, res) {
    try {
      const token = req.cookies.token;
      const { valid, expired, decoded } = verifyJWT(token);
      const users = await User.find({ _id: { $ne: decoded.id } });
      res.json(users);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
  static async deleteuser(req, res) {
    try {
      const { id } = req.body;
      await User.findByIdAndDelete(id);
      res.json({ msg: "User deleted successfully" });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
  static async updateuser(req, res) {
    try {
      const { _id, username, tel, email, password } = req.body;
      const user = await User.findById(_id);
      user.username = username;
      user.tel = tel;
      user.email = email;
      if (user.password !== password) {
        user.password = await bcrypt.hashSync(password, 10);
      }

      user.save();
      res.json({ msg: "User updated successfully" });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
}
