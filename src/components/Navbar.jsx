// Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./NavFoot.css"
const Navbar = () => {
  return (
    <nav>
      <div>E-Shop</div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
       <Link to="/cart" style={{ fontSize: "24px" }}>
  🛒 
</Link>
         <Link to="/register">Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;
