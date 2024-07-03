import React, { useState } from "react";
import { Table, Button, Form, Modal, Row, Col } from "react-bootstrap";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";

const CommandManager = ({ commands }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [currentCommand, setCurrentCommand] = useState(null);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleShowModal = (command) => {
    setCurrentCommand(command);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const filteredCommands = commands.filter(
    (command) =>
      command.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
      command.total.toString().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1 style={{ marginTop: "15px", marginBottom: "30px" }}>
        Command Management
      </h1>
      <Row className="align-items-center mb-3">
        <Col>
          <Form.Control
            type="text"
            placeholder="Search by user ID or amount"
            value={searchTerm}
            onChange={handleSearch}
          />
        </Col>
      </Row>
      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>User</th>
            <th>Date</th>
            <th>Produit</th>
            <th>Prix</th>
          </tr>
        </thead>
        <tbody>
          {filteredCommands.map((command) => (
            <tr key={command._id}>
              <td>{command.user}</td>

              <td>
                {command.date.toString().replace("Z", "").replace("T", " ")}
              </td>

              <td>
                {command.product.map((product) => (
                  <>
                    {product.name} X{product.amount} |{" "}
                    {product.amount * product.price}TND
                  </>
                ))}
              </td>
              <td>{command.total}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Command</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Amount</Form.Label>
              <Form.Control
                type="number"
                value={currentCommand ? currentCommand.amount : ""}
                disabled
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>User ID</Form.Label>
              <Form.Control
                type="text"
                value={currentCommand ? currentCommand.userId : ""}
                disabled
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CommandManager;
