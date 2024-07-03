import "../Style/ProductSearch.css";
import NavBar from "../components/Navbar";
import { getCategories, searchProduct } from "../Services/User";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import ProductList from "../components/ProductList";
const ProductSearch = () => {
  const [categories, setcategories] = useState([]); 
  const [searchTerm, setSearchTerm] = useState("");
  const [product, setproduct] = useState([]);
  useEffect(() => {
    getCategories(setcategories);
    searchProduct({ search: "", category: "all" }, setproduct);
  }, []);

  const [filters, setFilters] = useState("all");
  useEffect(() => {
    searchProduct({ search: searchTerm, category: filters }, setproduct);
  }, [filters, searchTerm]);
  const handleSearch = (e) => {
    searchProduct({ search: searchTerm, category: filters }, setproduct);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(value);
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
                <Form>
                  <Form.Control
                    type="text"
                    placeholder="Enter product name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </Form>
                <Form.Select
                  className="mt-3"
                  name="category"
                  value={filters.category}
                  onChange={handleFilterChange}
                >
                  <option value="all">Select category...</option>
                  {categories.map((category) => (
                    <option value={category.name}>{category.name}</option>
                  ))}
                  
                </Form.Select>
                <Button
                  variant="primary"
                  onClick={handleSearch}
                  className="mt-3 w-100"
                >
                  <BsSearch /> Search
                </Button>
                
              </Card.Body>
            </Card>
          </Col>
         
          <Col md={10}>
            <Card className="shadow-sm">
              <Card.Body>
                <h2 className="mb-4">Product List</h2>
                {product.length == 0 ? (
                  <p>No products found.</p>
                ) : (
                  <>
                    <ProductList prodlist={product} />
                  </>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductSearch;
