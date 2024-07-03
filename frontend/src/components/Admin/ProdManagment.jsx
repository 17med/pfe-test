import React, { useState } from "react";
import { Table, Button, Form, Modal, Row, Col } from "react-bootstrap";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import {
  addProduct,
  deleteProduct,
  updateProduct,
} from "../../Services/Administrator";

const ProductManagement = ({ products, refreshProducts }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({
    name: "",
    description: "",
    price: 0,
    category: [],
    imgFile: null, // For handling file upload
    _id: null,
  });

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleShowModal = (product = null) => {
    if (product) {
      setCurrentProduct({ ...product, imgFile: null });
    } else {
      setCurrentProduct({
        name: "",
        description: "",
        price: 0,
        category: [],
        imgFile: null,
        _id: null,
      });
    }
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSaveProduct = () => {
    console.log("currentProduct", currentProduct);
    const formData = new FormData();
    formData.append("name", currentProduct.name);
    formData.append("description", currentProduct.description);
    formData.append("price", currentProduct.price);
    formData.append("category", currentProduct.category.join(","));
    if (currentProduct.imgFile) {
      formData.append("image", currentProduct.imgFile);
    }
    console.log("from mini", formData.get("name"));
    if (currentProduct._id === null) {
      addProduct(formData, refreshProducts);
    } else {
      formData.append("id", currentProduct._id);
      updateProduct(formData, refreshProducts);
    }
    handleCloseModal();
  };

  const handleDeleteProduct = (id) => {
    deleteProduct(id, refreshProducts);
  };

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.some((cat) =>
        cat.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  return (
    <div>
      <h1 style={{ marginTop: "15px", marginBottom: "30px" }}>
        Product Management
      </h1>
      <Row className="align-items-center mb-3">
        <Col>
          <Form.Control
            type="text"
            placeholder="Search by name, description, or category"
            value={searchTerm}
            onChange={handleSearch}
          />
        </Col>
        <Col xs="auto">
          <Button variant="primary" onClick={() => handleShowModal()}>
            <FaPlus /> Add Product
          </Button>
        </Col>
      </Row>
      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product) => (
            <tr key={product._id}>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>${product.price.toFixed(2)}</td>
              <td>{product.category.join(", ")}</td>
              <td>
                <Button
                  variant="warning"
                  style={{ marginRight: "10px" }}
                  onClick={() => handleShowModal(product)}
                >
                  <FaEdit /> Edit
                </Button>
                <Button
                  variant="danger"
                  onClick={() => handleDeleteProduct(product._id)}
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
            {currentProduct._id === null ? "Add Product" : "Edit Product"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={currentProduct.name}
                onChange={(e) =>
                  setCurrentProduct({
                    ...currentProduct,
                    name: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={currentProduct.description}
                onChange={(e) =>
                  setCurrentProduct({
                    ...currentProduct,
                    description: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                step="0.01"
                min="0"
                value={currentProduct.price}
                onChange={(e) =>
                  setCurrentProduct({
                    ...currentProduct,
                    price: parseFloat(e.target.value),
                  })
                }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Category (comma-separated)</Form.Label>
              <Form.Control
                type="text"
                value={currentProduct.category.join(", ")}
                onChange={(e) =>
                  setCurrentProduct({
                    ...currentProduct,
                    category: e.target.value
                      .split(",")
                      .map((cat) => cat.trim()),
                  })
                }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                id="custom-file"
                label={
                  currentProduct.imgFile
                    ? currentProduct.imgFile.name
                    : "Choose file"
                }
                onChange={(e) =>
                  setCurrentProduct({
                    ...currentProduct,
                    imgFile: e.target.files[0],
                  })
                }
                custom
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveProduct}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ProductManagement;
