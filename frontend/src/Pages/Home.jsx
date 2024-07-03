import { useState } from "react";
import Navbar from "../components/Navbar";

import Carousel from "../components/Carousel";
import ProductList from "../components/ProductList";
import Footer from "../components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <div className="scrollx">
        <div
          style={{
            height: "400px",
            marginTop: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ width: "800px" }}>
            <Carousel />
          </div>
        </div>
        <br />
        <ProductList />
        <Footer />
      </div>
    </>
  );
}

export default App;
