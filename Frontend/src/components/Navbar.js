import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
function Header() {
  return (
    <div className="header">
      <div className="Navbar">
        <h2>MEDICARE</h2>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact US</li>
          </Link>
          <Link to="/doctors">
            <li>Our Doctors</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Header;
