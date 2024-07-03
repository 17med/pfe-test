import { Link } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";
import { CiLogout } from "react-icons/ci";
import { LuUsers2 } from "react-icons/lu";
import { AiOutlineProduct } from "react-icons/ai";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { logout } from "./../Services/User.js";
const NavbarAdmin = () => {
  const handleLogout = () => {
    logout();
  };
  return (
    <Navbar bg="dark" variant="dark" className="flex-column h-100">
      <Navbar.Brand style={{ fontSize: "1.5rem", padding: "20px 0" }}>
        Admin Dashboard
      </Navbar.Brand>
      <Nav className="flex-column">
        <Link to="/admin" className="linkurl">
          <Nav.Link href="#home" className="nav-link-custom">
            <IoHomeOutline className="nav-icon" />
            Accueil
          </Nav.Link>
        </Link>
        <Link to="/admin/users" className="linkurl">
          <Nav.Link href="#users" className="nav-link-custom">
            <LuUsers2 className="nav-icon" />
            Utilisateur
          </Nav.Link>
        </Link>
        <Link to="/admin/product" className="linkurl">
          <Nav.Link href="#products" className="nav-link-custom">
            <AiOutlineProduct className="nav-icon" />
            Produit
          </Nav.Link>
        </Link>
        <Link to="/admin/commande" className="linkurl">
          <Nav.Link href="#orders" className="nav-link-custom">
            <MdOutlineProductionQuantityLimits className="nav-icon" />
            Commande
          </Nav.Link>
        </Link>
      </Nav>
      <Button
        variant="dark"
        className="mt-auto logout-button"
        onClick={handleLogout}
      >
        <CiLogout className="nav-icon" />
        Logout
      </Button>
    </Navbar>
  );
};
export default NavbarAdmin;