import "./Nav.css";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <nav className="main-nav">
      <Link to="/home">Home</Link>
      <Link to="/ambulance">Ambulance</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Nav;
