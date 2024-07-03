import React from "react";
import { Card, Button } from "react-bootstrap";
import StateManager from "../Services/StateManager";
import { json, useNavigate } from "react-router-dom";
import { addprod } from "../Services/User.js";
const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const x = StateManager((state) => state.isLoggedIn);
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={"http://localhost:3000/products/" + product.img}
      />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        {x == true ? (
          <>
            <Button
              variant="primary"
              onClick={() => {
                const r = JSON.parse(JSON.stringify(product));
                r.id = r._id;
                r.amount = 1;
                addprod(r, StateManager.getState().ajouter);
              }}
            >
              Achetez à {product.price} TND
            </Button>
          </>
        ) : (
          <>
            <Button
              onClick={() => {
                navigate("/login");
              }}
              variant="primary"
            >
              Achetez maintenant
            </Button>
          </>
        )}
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
