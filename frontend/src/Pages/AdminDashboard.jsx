import React from "react";
import { CiLogout } from "react-icons/ci";
import { LuUsers2 } from "react-icons/lu";
import { AiOutlineProduct } from "react-icons/ai";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import "../Style/AdminDashboard.css";
import { logout } from "./../Services/User.js";
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
  const handleLogout = () => {
    logout();
  };

  return (
    <Container fluid style={{ height: "100vh" }}>
      <Row style={{ height: "100%" }}>
        <Col sm={2} md={2} lg={2} xl={2} className="bg-dark text-light p-0">
          <Navbar bg="dark" variant="dark" className="flex-column h-100">
            <Navbar.Brand style={{ fontSize: "1.5rem", padding: "20px 0" }}>
              Admin Dashboard
            </Navbar.Brand>
            <Nav className="flex-column">
              <Nav.Link href="#home" className="nav-link-custom">
                <IoHomeOutline className="nav-icon" />
                Accueil
              </Nav.Link>
              <Nav.Link href="#users" className="nav-link-custom">
                <LuUsers2 className="nav-icon" />
                Utilisateur
              </Nav.Link>
              <Nav.Link href="#products" className="nav-link-custom">
                <AiOutlineProduct className="nav-icon" />
                Produit
              </Nav.Link>
              <Nav.Link href="#orders" className="nav-link-custom">
                <MdOutlineProductionQuantityLimits className="nav-icon" />
                Commande
              </Nav.Link>
              {/* Add more links as needed */}
            </Nav>
            <Button
              variant="dark"
              className="mt-auto logout-button"
              onClick={handleLogout}
            >
              <CiLogout className="nav-icon" />
              Logout
            </Button>
          </Navbar>
        </Col>

        {/* Main Content */}
        <Col sm={10} md={10} lg={10} xl={10} className="main-content">
          <Container fluid className="mt-3 h-100">
            <Card className="h-100">
              <Card.Body>
                <h2>Welcome to Admin Dashboard</h2>
                {/* Your main content goes here */}
              </Card.Body>
            </Card>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminDashboard;
