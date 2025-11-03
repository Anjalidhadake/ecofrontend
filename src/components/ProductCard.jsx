// ...existing code...
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ProductCard.css";

const PLACEHOLDER = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='160'><rect width='100%' height='100%' fill='%23eeeeee'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%23999' font-size='18'>No Image</text></svg>";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const [imgSrc, setImgSrc] = useState(PLACEHOLDER);

  useEffect(() => {
    console.log("ProductCard product:", product);
    if (!product) {
      setImgSrc(PLACEHOLDER);
      return;
    }
    const img = product.image;
    if (!img) {
      setImgSrc(PLACEHOLDER);
      return;
    }
    if (img.startsWith("http")) {
      setImgSrc(img);
    } else {
      // ensure leading slash
      const path = img.startsWith("/") ? img : `/${img}`;
      setImgSrc(`http://localhost:5000${path}`);
    }
  }, [product]);

  const handleImgError = () => {
    setImgSrc(PLACEHOLDER);
  };

  const handleAddToCart = () => {
    const id = product._id ?? product.id;
    const saved = localStorage.getItem("cart");
    const cart = saved ? JSON.parse(saved) : [];
    const existing = cart.find((i) => (i._id ?? i.id) === id);
    let updated;
    if (existing) {
      updated = cart.map((i) =>
        (i._id ?? i.id) === id ? { ...i, quantity: (i.quantity || 1) + 1 } : i
      );
    } else {
      updated = [...cart, { ...product, quantity: 1 }];
    }
    localStorage.setItem("cart", JSON.stringify(updated));
    // small feedback — optionally replace with toasts
    //alert(`${product.name} added to cart`);
  };

  return (
    <div className="product-card">
      <img src={imgSrc} alt={product?.name || "product"} onError={handleImgError} />
      <h3>{product?.name}</h3>
      <p>₹{product?.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
// ...existing code...