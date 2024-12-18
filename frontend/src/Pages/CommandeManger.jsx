import React, { useEffect } from "react";

import "../Style/AdminDashboard.css";

import { Link } from "react-router-dom";
import NavbarAdmin from "../components/NavBarAdmin.jsx";
import CommandManager from "../components/Admin/CommandeManager.jsx";
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Button,
  Card,
} from "react-bootstrap";
import { getcommandes } from "../Services/Administrator.js";
import { useState } from "react";
const AdminDashboard = () => {
  const [commande, setcommande] = useState([]);
  const [refrechvar, setrefrech] = useState(false);
  const refrech = () => {
    setrefrech(!refrechvar);
  };
  useEffect(() => {
    const fetchUsers = async () => {
      getcommandes(setcommande);
    };
    fetchUsers();
  }, [refrechvar]);
  return (
    <Container fluid style={{ height: "100vh" }}>
      <Row style={{ height: "100%" }}>
        <Col sm={2} md={2} lg={2} xl={2} className="bg-dark text-light p-0">
          <NavbarAdmin />
        </Col>

        
        <Col sm={10} md={10} lg={10} xl={10} className="main-content">
          <Container fluid className="mt-3 h-100">
            <Card className="h-100">
              <Card.Body>
                <CommandManager commands={commande} />
              </Card.Body>
            </Card>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminDashboard;
