import React, { useEffect, useState } from "react";
import {
  Table,
  Button,
  Form,
  Modal,
  Row,
  Col,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import {
  addProduct,
  deleteProduct,
  updateProduct,
} from "../../Services/Administrator";

const ProductManagement = ({ products, refreshProducts, categories }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const allCategories = categories;

  const handleCategoryChange = (e) => {
    const { checked, value } = e.target;
    setCurrentProduct((prev) => {
      let newCategories;
      if (checked && !prev.category.includes(value)) {
        newCategories = [...prev.category, value];
      } else {
        newCategories = prev.category.filter((cat) => cat !== value);
      }
      return { ...prev, category: newCategories };
    });
  };

  const [currentProduct, setCurrentProduct] = useState({
    name: "",
    description: "",
    price: 0,
    category: [],
    imgFile: null,
    _id: null,
  });

  useEffect(() => {
    console.log("products", currentProduct);
  }, [currentProduct]);

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
    currentProduct.category.forEach((cat) => {
      formData.append("category", cat);
    });
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
        <Col></Col>
        <Col xs="auto">
          <Button variant="primary" onClick={() => handleShowModal()}>
            <FaPlus /> Add Product
          </Button>
        </Col>
      </Row>
      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>Image</th>
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
              <td className="center">
                <div className="image-container">
                  {
                    <img
                      className=""
                      src={"http://localhost:3000/products/" + product.img}
                      alt={product.name}
                    />
                  }
                </div>
              </td>
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
            <Form.Group style={{ marginTop: "20px" }}>
              <Form.Label>Category</Form.Label>
              <DropdownButton
                data-bs-theme="dark"
                id="dropdown-basic-button"
                title="Select Categories"
                style={{ width: "100%" }}
              >
                {allCategories.map((category, index) => (
                  <Dropdown.Item as="div" key={index} data-bs-theme="dark">
                    <Form.Check
                      type="checkbox"
                      label={category.name}
                      value={category.name}
                      checked={currentProduct.category.includes(category.name)}
                      onChange={handleCategoryChange}
                    />
                  </Dropdown.Item>
                ))}
              </DropdownButton>
            </Form.Group>
            <Form.Group style={{ marginTop: "20px" }}>
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
