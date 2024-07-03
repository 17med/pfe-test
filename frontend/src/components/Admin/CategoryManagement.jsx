import React, { useState } from "react";
import { Table, Button, Form, Modal, Row, Col } from "react-bootstrap";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import {
  addCategory,
  updateCategory,
  deleteCategory,
} from "../../Services/Administrator";

const CategoryManagement = ({ categories, refrech }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [currentCategory, setCurrentCategory] = useState({
    name: "",
    _id: null,
  });

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleShowModal = (category = { name: "", _id: null }) => {
    setCurrentCategory(category);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSaveCategory = () => {
    if (currentCategory._id === null) {
      addCategory(currentCategory, refrech);
    } else {
      updateCategory(currentCategory, refrech);
    }
    handleCloseModal();
  };

  const handleDeleteCategory = (id) => {
    deleteCategory({ id }, refrech);
    setCurrentCategory({
      name: "",
      _id: null,
    });
  };

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1 style={{ marginTop: "15px", marginBottom: "30px" }}>
        Category Management
      </h1>
      <Row className="align-items-center mb-3">
        <Col>
          <Form.Control
            type="text"
            placeholder="Search by category name"
            value={searchTerm}
            onChange={handleSearch}
          />
        </Col>
        <Col xs="auto">
          <Button variant="primary" onClick={() => handleShowModal()}>
            <FaPlus /> Add Category
          </Button>
        </Col>
      </Row>
      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredCategories.map((category) => (
            <tr key={category._id}>
              <td>{category.name}</td>
              <td>
                <Button
                  variant="warning"
                  style={{ marginRight: "20px" }}
                  onClick={() => handleShowModal(category)}
                >
                  <FaEdit /> Edit
                </Button>
                <Button
                  variant="danger"
                  onClick={() => handleDeleteCategory(category._id)}
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
            {currentCategory._id === null ? "Add Category" : "Edit Category"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={currentCategory.name}
                onChange={(e) =>
                  setCurrentCategory({
                    ...currentCategory,
                    name: e.target.value,
                  })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveCategory}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CategoryManagement;
