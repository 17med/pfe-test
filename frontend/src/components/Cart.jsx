import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ListGroup from "react-bootstrap/ListGroup";
import StateManager from "./../Services/StateManager";
import "../Style/cart.css";
import { deletefromcart, commande } from "../Services/User.js";

function Cart() {
  const show = StateManager((state) => state.show);
  const cartItems = StateManager((state) => state.cart);

  const handleClose = () => StateManager.setState({ show: false });
  const handleShow = () => StateManager.setState({ show: true });

  const handleRemoveItem = (id) => {
    deletefromcart({ id: id }, StateManager.getState().ajouter);
  };
  const submit = () => {
    var s = 0;
    for (var i = 0; i < cartItems.length; i++) {
      s += cartItems[i].price * cartItems[i].amount;
    }
    console.log(
      { products: StateManager.getState().cart, total: s },
      "rrrrrrrrrrr"
    );
    commande({ products: StateManager.getState().cart, total: s }, handleClose);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} dialogClassName="custom-modal">
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cartItems.length > 0 ? (
            <ListGroup>
              {cartItems.map((item) => (
                <ListGroup.Item
                  key={item.id}
                  className="d-flex justify-content-between align-items-center"
                >
                  {item.name} -(x {item.amount}) ${item.price * item.amount}
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    Remove
                  </Button>
                </ListGroup.Item>
              ))}
            </ListGroup>
          ) : (
            <p>Your cart is empty.</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            disabled={cartItems.length === 0}
            onClick={submit}
          >
            Checkout
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Cart;
