import "../assets/css/Nav.css";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <nav className="main-nav">
      <Link to="/home">Home</Link>
      <Link to="/ambulance">Ambulance</Link>
      <Link to="/about">About Us</Link>
      <Link to="/contact">Contact Us</Link>
      <Link to="/hospital">Hospital</Link>
    </nav>
  );
}

export default Nav;
