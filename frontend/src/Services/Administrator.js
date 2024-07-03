import axios from "axios";

import { toast } from "react-toastify";

axios.defaults.withCredentials = true;

export async function getuser(setuser) {
  try {
    const x = await axios.get("http://localhost:3000/api/users/users", {
      withCredentials: true,
    });
    setuser(x.data);
  } catch (err) {
    toast.error(err.response.data.error);
  }
}
export async function signup(data, refrech) {
  try {
    console.log(data);
    const x = await axios.post(
      "http://localhost:3000/api/users/register",
      data
    );

    toast.success("done");
    refrech();
  } catch (err) {
    toast.error(err.response.data.error);
  }
}
export async function deleteuser(data, refrech) {
  try {
    console.log(data);
    const x = await axios.post("http://localhost:3000/api/users/delete", data);
    refrech();
    toast.success("done");
  } catch (err) {
    toast.error(err.response.data.error);
  }
}
export async function updateuser(data, refrech) {
  try {
    console.log(data, "dataaaa");
    const x = await axios.post("http://localhost:3000/api/users/update", data);

    toast.success("done");
    refrech();
  } catch (err) {
    toast.error(err.response.data.error);
  }
}
export async function addCategory(data, refresh) {
  try {
    console.log(data);
    const x = await axios.post(
      "http://localhost:3000/api/Category/addcategory",
      data
    );
    toast.success("done");
    refresh();
  } catch (err) {
    toast.error(err.response.data.error);
  }
}

export async function getCategoriess(setcategories) {
  try {
    const x = await axios.get(
      "http://localhost:3000/api/Category/getcategories"
    );
    const r = x.data.forEach((element) => {
      element = element.name;
    });
    setcategories(r);
  } catch (err) {
    toast.error(err.response.data.error);
  }
}

export async function getCategories(setcategories) {
  try {
    const x = await axios.get(
      "http://localhost:3000/api/Category/getcategories"
    );
    setcategories(x.data);
    console.log(x.data);
  } catch (err) {
    toast.error(err.response.data.error);
  }
}
export async function deleteCategory(data, refrech) {
  try {
    console.log(data);
    const x = await axios.post(
      "http://localhost:3000/api/Category/deletecategory",
      data
    );
    refrech();
    toast.success("done");
  } catch (err) {
    toast.error(err.response.data.error);
  }
}
export async function updateCategory(data, refrech) {
  try {
    console.log(data);
    const x = await axios.post(
      "http://localhost:3000/api/Category/updatecategory",
      data
    );
    refrech();
    toast.success("done");
  } catch (err) {
    toast.error(err.response.data.error);
  }
}

export async function addProduct(data, refresh) {
  try {
    const formData = data;
    console.log(formData.get("name"), "data");
    const response = await axios.post(
      "http://localhost:3000/api/Products/addproduct",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    toast.success(response.data.msg);

    refresh();
  } catch (err) {
    console.log(err);
    toast.error(err.response.data.error);
  }
}

// Function to delete a product
export async function deleteProduct(id, refresh) {
  try {
    const response = await axios.post(
      "http://localhost:3000/api/Products/deleteproduct",
      { id }
    );

    toast.success(response.data.msg);
    refresh();
  } catch (err) {
    toast.error(err.response.data.error);
  }
}

// Function to update a product
export async function updateProduct(data, refresh) {
  try {
    const formData = data;
    const response = await axios.post(
      "http://localhost:3000/api/Products/update",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    toast.success(response.data.msg);
    refresh();
  } catch (err) {
    console.log(err);
    toast.error(err.response.data.error);
  }
}

export async function getAllProducts(setProducts) {
  try {
    const response = await axios.get(
      "http://localhost:3000/api/Products/getallproducts"
    );
    setProducts(response.data);
  } catch (err) {
    toast.error(err.response.data.error);
  }
}
export async function getcommandes(setcommandes) {
  try {
    const x = await axios.get("http://localhost:3000/api/Commande/", {
      withCredentials: true,
    });
    console.log(x.data, "commandes");
    setcommandes(x.data);
  } catch (err) {
    toast.error(err.response.data.error);
  }
}
