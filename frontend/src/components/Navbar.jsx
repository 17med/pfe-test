import React, { useEffect } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import useLoginStore from "./../Services/StateManager";
import { Link } from "react-router-dom";
import { CiLogin } from "react-icons/ci";
import { CiShoppingBasket } from "react-icons/ci";
import { MdOutlineAccountCircle } from "react-icons/md";
import { logout } from "./../Services/User.js";

const NavbarComponent = () => {
  const isLoggedIn = useLoginStore((state) => state.isLoggedIn);
  const cart = useLoginStore((state) => state.cart);
  console.log(useLoginStore.getState());
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      className="shadow-sm"
      style={{ top: 0, zIndex: 2 }}
    >
      <Container>
        <Navbar.Brand href="#home" className="font-weight-bold">
          Ferraille Shop
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to={"/home#home"} style={{ textDecoration: "none" }}>
              {" "}
              <Nav.Link href="#home" className="mx-2">
                Accueil
              </Nav.Link>
            </Link>
            <Link to={"/search#features"} style={{ textDecoration: "none" }}>
              <Nav.Link href="#features" className="mx-2">
                Consulter les produits
              </Nav.Link>
            </Link>
          </Nav>
          <Nav>
            {!isLoggedIn ? (
              <Link to="/login" style={{ textDecoration: "none" }}>
                <Nav.Link href="#account" className="mx-2">
                  <CiLogin style={{ fontSize: "20px", marginRight: "10px" }} />
                  Login
                </Nav.Link>
              </Link>
            ) : (
              <>
                <Nav.Link href="#username" className="mx-2">
                  <MdOutlineAccountCircle
                    style={{ fontSize: "20px", marginRight: "10px" }}
                  />
                  {useLoginStore.getState().user}
                </Nav.Link>
                <Nav.Link href="#cart" className="mx-2">
                  <CiShoppingBasket
                    className="cart-icon"
                    style={{ fontSize: "20px" }}
                    onClick={() => {
                      useLoginStore.setState({ show: true });
                    }}
                  />

                  {cart != null && cart.products.length > 0 && (
                    <span
                      className="cart-count"
                      style={{ marginTop: "-100px" }}
                    >
                      {cart.products.length}
                    </span>
                  )}
                </Nav.Link>
                <Nav.Link
                  href="#accounts"
                  className="mx-2"
                  onClick={() => {
                    logout();
                    setStx(stx + 1);
                  }}
                >
                  <CiLogin style={{ fontSize: "20px", marginRight: "10px" }} />
                  Logout
                </Nav.Link>
              </>
            )}

            {/*<Button variant="outline-light" className="mx-2">
              Login
            </Button>*/}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
