import React, { useEffect, useState } from "react";

import "../Style/AdminDashboard.css";
import { getAllProducts, getCategories } from "../Services/Administrator.js";
import { Link } from "react-router-dom";
import NavbarAdmin from "../components/NavBarAdmin.jsx";
import ProdManagment from "../components/Admin/ProdManagment.jsx";
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Button,
  Card,
} from "react-bootstrap";

const AdminDashboard = () => {
  const [product, setproduct] = useState([]);
  const [refrechvar, setrefrechvar] = useState(false);
  const [categories, setcategories] = useState([]);
  useEffect(() => {
    getAllProducts(setproduct);
    getCategories(setcategories);
  }, [refrechvar]);
  const refrech = () => {
    setrefrechvar(!refrechvar);
  };
  return (
    <Container fluid style={{ height: "100vh" }}>
      <Row style={{ height: "100%" }}>
        <Col sm={2} md={2} lg={2} xl={2} className="bg-dark text-light p-0">
          <NavbarAdmin />
        </Col>

        {/* Main Content */}
        <Col sm={10} md={10} lg={10} xl={10} className="main-content">
          <Container fluid className="mt-3 h-100">
            <Card className="h-100">
              <Card.Body>
                <h2>Product</h2>
                <ProdManagment
                  products={product}
                  refreshProducts={refrech}
                  categories={categories}
                />
              </Card.Body>
            </Card>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminDashboard;
