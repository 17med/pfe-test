import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import AdminDashboard from "./Pages/AdminDashboard";
import AdminUser from "./Pages/AdminUser";
import AdminProd from "./Pages/AdminProd";
import ProductSearch from "./Pages/ProductSearch";
import AdminCategory from "./Pages/AdminCategory";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import useLoginStore from "./Services/StateManager";
import { useEffect } from "react";
import { islogin } from "./Services/User";
import { useState } from "react";
import Cart from "./components/Cart";
function App() {
  useEffect(() => {
    islogin();
  }, []);
  const isLoggedIn = useLoginStore((state) => state.isLoggedIn);
  const isadmin = useLoginStore((state) => state.isadmin);

  return (
    <>
      <Cart />
      <ToastContainer autoClose={5000} pauseOnFocusLoss={false} />
      <BrowserRouter>
        <Routes>
          {isadmin == false ? (
            <>
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="/home" element={<Home />} />
              <Route path="/search" element={<ProductSearch />} />
              {isLoggedIn == false ? (
                <>
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                </>
              ) : (
                <></>
              )}

              <Route path="/search" element={<ProductSearch />} />
              <Route path="*" element={<Navigate to="/home" />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Navigate to="/admin" />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/admin/users" element={<AdminUser />} />
              <Route path="/admin/product" element={<AdminProd />} />
              <Route path="/admin/category" element={<AdminCategory />} />
              <Route path="*" element={<Navigate to="/admin" />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
