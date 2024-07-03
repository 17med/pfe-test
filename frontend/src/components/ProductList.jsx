

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "./ProductCard";



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
