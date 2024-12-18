import axios from "axios";
import StateManaer from "./StateManager";
import { ToastContainer, toast } from "react-toastify";

axios.defaults.withCredentials = true;

async function login(data, navigate) {
  try {
    const x = await axios.post("http://localhost:3000/api/users/login", data, {
      withCredentials: true,
    });
    const d = await axios.get("http://localhost:3000/api/Cart/getCart", {
      withCredentials: true,
    });

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
    await axios.get("http://localhost:3000/api/users/logout", {
      withCredentials: true,
    });
    StateManaer.getState().logout();

    toast.success("done");
  } catch (err) {
    console.log(err);
    toast.error(err.response.data.error);
  }
}
async function islogin() {
  try {
    const x = await axios.get("http://localhost:3000/api/users/islogin", {
      withCredentials: true,
    });
    const d = await axios.get("http://localhost:3000/api/Cart/getCart", {
      withCredentials: true,
    });
    console.log("cart", d.data);
    console.log("islogin", x.data);
    StateManaer.getState().login(
      x.data.username,
      x.data.id,
      d.data.products,
      x.data.isadmin
    );
    return true;
  } catch (err) {
    return false;
    console.log(err);
  }
}
async function getrandom(setx) {
  try {
    const x = await axios.get("http://localhost:3000/api/Products/getrandom", {
      withCredentials: true,
    });

    setx(x.data);
  } catch (err) {}
}
async function addprod(prod, ajouter) {
  try {
    const x = await axios.post(
      "http://localhost:3000/api/Cart/addtocart",
      prod,
      {
        withCredentials: true,
      }
    );
    ajouter(x.data.cart);
    toast.success("done");
  } catch (err) {
    toast.error(err.response.data.error);
  }
}
async function deletefromcart(prod, ajouter) {
  try {
    const x = await axios.post(
      "http://localhost:3000/api/Cart/deletefromcart",
      prod,
      {
        withCredentials: true,
      }
    );
    ajouter(x.data.cart);
    toast.success("done");
  } catch (err) {
    toast.error(err.response.data.error);
  }
}

async function getCategories(setcategories) {
  try {
    const x = await axios.get(
      "http://localhost:3000/api/Category/getcategories"
    );
    setcategories(x.data);
  } catch (err) {
    console.log(err, "errrrrrrrrrrrrrrrrror");
    toast.error(err.response.data.error);
  }
}
async function searchProduct(data, setproducts) {
  try {
    const x = await axios.post("http://localhost:3000/api/Search", data);
    setproducts(x.data);
    console.log(x.data, "search");
  } catch (err) {
    console.log(err);
    toast.error(err.response.data.error);
  }
}
async function commande(data, run) {
  try {
    const x = await axios.post("http://localhost:3000/api/Commande/", data, {
      withCredentials: true,
    });

    toast.success("done");
    run();
    islogin();
  } catch (err) {
    toast.error(err.response.data.error);
  }
}
export {
  login,
  signup,
  logout,
  islogin,
  getrandom,
  addprod,
  deletefromcart,
  getCategories,
  searchProduct,
  commande,
};
