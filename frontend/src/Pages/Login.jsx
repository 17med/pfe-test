// Login.js

import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { login } from "./../Services/User.js";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    login({ username, password }, navigate);
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
            Login
          </h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
                Login
              </Button>
            </div>
          </Form>
          <div className="mt-3 text-center">
            <p>
              Don't have an account?{" "}
              <a href="" style={{ color: "#212529", textDecoration: "none" }}>
                <Link to={"/signup"} className="linkurl">
                  Create one
                </Link>
              </a>
            </p>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;
