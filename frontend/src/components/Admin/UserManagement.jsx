import React, { useState } from "react";
import { Table, Button, Form, Modal, Row, Col } from "react-bootstrap";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import { signup, deleteuser, updateuser } from "../../Services/Administrator";
const UserManagement = ({ users, refrech }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    username: "",
    email: "",
    tel: "",
    password: "",
    _id: null,
  });

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleShowModal = (
    user = { username: "", email: "", tel: "", password: "", _id: null }
  ) => {
    setCurrentUser(user);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSaveUser = () => {
    if (currentUser._id === null) {
      signup(currentUser, refrech);
    } else {
      updateuser(currentUser, refrech);
    }
    handleCloseModal();
  };

  const handleDeleteUser = (id) => {
    deleteuser({ id }, refrech);

    setCurrentUser({
      username: "",
      email: "",
      tel: "",
      password: "",
      _id: null,
    });
    //setUsers(users.filter((user) => user.id !== id));
  };

  const filteredUsers = users.filter(
    (user) =>
      user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.telephone.includes(searchTerm)
  );

  return (
    <div>
      <h1 style={{ marginTop: "15px", marginBottom: "30px" }}>
        User Management
      </h1>
      <Row className="align-items-center mb-3">
        <Col>
          <Form.Control
            type="text"
            placeholder="Search by username, email, or telephone"
            value={searchTerm}
            onChange={handleSearch}
          />
        </Col>
        <Col xs="auto">
          <Button variant="primary" onClick={() => handleShowModal()}>
            <FaPlus /> Add User
          </Button>
        </Col>
      </Row>
      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Telephone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.username}>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.tel}</td>
              <td>
                <Button
                  variant="warning"
                  style={{ marginRight: "20px" }}
                  onClick={() => handleShowModal(user)}
                >
                  <FaEdit /> Edit
                </Button>
                <Button
                  variant="danger"
                  onClick={() => handleDeleteUser(user._id)}
                  className="ml-2"
                >
                  <FaTrash /> Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            {currentUser._id === null ? "Add User" : "Edit User"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                value={currentUser.username}
                onChange={(e) =>
                  setCurrentUser({ ...currentUser, username: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={currentUser.email}
                onChange={(e) =>
                  setCurrentUser({ ...currentUser, email: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Telephone</Form.Label>
              <Form.Control
                type="text"
                value={currentUser.tel}
                onChange={(e) =>
                  setCurrentUser({ ...currentUser, tel: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={currentUser.password}
                onChange={(e) =>
                  setCurrentUser({ ...currentUser, password: e.target.value })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveUser}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UserManagement;
