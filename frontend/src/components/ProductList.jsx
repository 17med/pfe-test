// ProductList.jsx

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "./ProductCard";

const products = [
  {
    name: "Product 1",
    description: "This is a description for product 1.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Product 2",
    description: "This is a description for product 2.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Product 3",
    description: "This is a description for product 2.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Product 4",
    description: "This is a description for product 2.",
    image: "https://via.placeholder.com/150",
  },
];

const ProductList = ({ prodlist }) => {
  return (
    <Container style={{ marginTop: "30px" }}>
      <Row>
        {prodlist.map((product, index) => (
          <Col sm={6} md={4} lg={3} key={index}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
