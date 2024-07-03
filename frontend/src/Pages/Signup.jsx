

import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { signup } from "./../Services/User.js";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [telephone, setTelephone] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Telephone:", telephone);
    signup({ username, email, password, tel: telephone }, navigate);
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh", backgroundColor: "white" }}
    >
      <Card
        style={{
          width: "400px",
          padding: "20px",
          boxShadow: "0px 0px 15px 0px rgba(0,0,0,0.1)",
        }}
      >
        <Card.Body>
          <h2 className="text-center mb-4" style={{ color: "#212529" }}>
            Create Account
          </h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicTelephone">
              <Form.Label>Telephone</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter telephone number"
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
              />
            </Form.Group>

            <Form.Group
              controlId="formBasicPassword"
              style={{ marginTop: "10px" }}
            >
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "20px",
              }}
            >
              <Button
                variant="primary"
                type="submit"
                style={{
                  backgroundColor: "#212529",
                  borderColor: "#212529",
                  width: "80%",
                }}
                block
              >
                Create Account
              </Button>
            </div>
          </Form>
          <div className="mt-3 text-center">
            <p>
              Already have an account?{" "}
              <Link className="linkurl" to="/login">
                Login here
              </Link>
            </p>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Signup;
