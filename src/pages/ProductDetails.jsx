
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const navigate = useNavigate();


  // Cart state
  const [cart, setCart] = useState(() => {
    // Initialize from localStorage if exists
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const handleAddToCart = () => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    navigate("/cart", { state: { cart: updatedCart } });
  };

  return (
    <div className="main-container">
      <h2>Product Details</h2>
      <img src={product.image} alt={product.name} style={{ width: "200px", height: "200px" }} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Price: {product.price}</p>
      <button
        style={{
          padding: "8px 12px",
          backgroundColor: "#2980b9",
          color: "#fff",
          border: "none",
          borderRadius: "3px",
          cursor: "pointer",
        }}
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetails;
