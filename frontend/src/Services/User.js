import axios from "axios";
import StateManaer from "./StateManager";
import { ToastContainer, toast } from "react-toastify";

axios.defaults.withCredentials = true;

async function login(data, navigate) {
  try {
    const x = await axios.post("http://localhost:3000/api/users/login", data);
    const d = await axios.get("http://localhost:3000/api/Cart/getCart");
    console.log("dataaaaaaaaaaaaa", x.data, d.data);
    StateManaer.getState().login(
      x.data.user,
      x.data.id,
      d.data,
      x.data.isadmin
    );

    toast.success("done");
    navigate("/home");
  } catch (err) {
    console.log(err);
    toast.error(err.response.data.error);
    console.log("error");
  }
}

async function signup(data, navigate) {
  try {
    console.log(data);
    const x = await axios.post(
      "http://localhost:3000/api/users/register",
      data
    );
    navigate("/login");
    toast.success("done");
  } catch (err) {
    toast.error(err.response.data.error);
  }
}
async function logout() {
  try {
    await axios.get("http://localhost:3000/api/users/logout");
    StateManaer.getState().logout();

    toast.success("done");
  } catch (err) {
    console.log(err);
    toast.error(err.response.data.error);
  }
}
async function islogin() {
  try {
    const x = await axios.get("http://localhost:3000/api/users/islogin");
    const d = await axios.get("http://localhost:3000/api/Cart/getCart");
    console.log("cart", d.data.cart);
    console.log("islogin", x.data);
    StateManaer.getState().login(x.data.username, x.data.id, d.data.cart);
    return true;
  } catch (err) {
    return false;
    console.log(err);
  }
}

export { login, signup, logout, islogin };