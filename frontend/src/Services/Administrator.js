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
