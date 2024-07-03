import "../Style/ProductSearch.css";
import NavBar from "../components/Navbar";



import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";

const ProductSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    category: "",
    priceRange: "",
    
  });

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search logic here (e.g., API call with searchTerm and filters)
    console.log("Searching for:", searchTerm);
    console.log("Filters:", filters);
    // Simulated search results
    // Replace with actual logic to fetch and display products
    // setProducts([...]); // Example of setting products state
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  return (
    <>
      <NavBar />
      <Container fluid className="py-4">
        <Row>
          {/* Left Side: Search Form */}
          <Col md={2} className="mb-3 mb-md-0">
            <Card className="shadow-sm">
              <Card.Body>
                <h2 className="mb-4">Product Search</h2>
                <Form onSubmit={handleSearch}>
                  <Form.Control
                    type="text"
                    placeholder="Enter product name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <Button
                    variant="primary"
                    type="submit"
                    className="mt-3 w-100"
                  >
                    <BsSearch /> Search
                  </Button>
                </Form>
                <Form.Select
                  className="mt-3"
                  name="category"
                  value={filters.category}
                  onChange={handleFilterChange}
                >
                  <option value="">Select category...</option>
                  <option value="electronics">Electronics</option>
                  <option value="clothing">Clothing</option>
                  <option value="books">Books</option>
                  {/* Add more categories as needed */}
                </Form.Select>
                <Form.Select
                  className="mt-3"
                  name="priceRange"
                  value={filters.priceRange}
                  onChange={handleFilterChange}
                >
                  <option value="">Select price range...</option>
                  <option value="0-50">$0 - $50</option>
                  <option value="51-100">$51 - $100</option>
                  <option value="101-200">$101 - $200</option>
                  {/* Add more price ranges as needed */}
                </Form.Select>
                {/* Add more filter options here */}
              </Card.Body>
            </Card>
          </Col>
          {/* Right Side: Product List (Placeholder) */}
          <Col md={10}>
            <Card className="shadow-sm">
              <Card.Body>
                <h2 className="mb-4">Product List</h2>
                {/* Replace with actual product list or search results */}
                <p>No products found.</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductSearch;
