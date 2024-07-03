import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import AdminDashboard from "./Pages/AdminDashboard";
import ProductSearch from "./Pages/ProductSearch";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import useLoginStore from "./Services/StateManager";
import { useEffect } from "react";
import { islogin } from "./Services/User";
function App() {
  useEffect(() => {
    islogin();
  }, []);
  const isLoggedIn = useLoginStore((state) => state.isLoggedIn);
  const isadmin = useLoginStore((state) => state.isadmin);
  return (
    <>
      <ToastContainer autoClose={5000} pauseOnFocusLoss={false} />
      <BrowserRouter>
        <Routes>
          {isadmin == false ? (
            <>
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="/home" element={<Home />} />
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
              <Route path="*" element={<Navigate to="/admin" />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
