import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { getrandom } from "../Services/User";
import Carousel from "../components/Carousel";
import ProductList from "../components/ProductList";
import Footer from "../components/Footer";
function App() {
  const [product, setproduct] = useState([]);
  useEffect(() => {
    getrandom(setproduct);
  }, []);
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
        <ProductList prodlist={product} />
        <Footer />
      </div>
    </>
  );
}

export default App;
