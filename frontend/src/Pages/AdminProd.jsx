import React from "react";

import "../Style/AdminDashboard.css";

import { Link } from "react-router-dom";
import NavbarAdmin from "../components/NavBarAdmin.jsx";
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
                <h2>Users</h2>
              </Card.Body>
            </Card>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminDashboard;
