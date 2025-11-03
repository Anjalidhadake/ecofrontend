// ...existing code...
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import axios from "axios";
import "./Products.css";

// ✅ Import images from assets
import diwali1 from "../assets/a2.png";
import diwali2 from "../assets/a3.png";
// ...existing code...

const bannerImages = [diwali1, diwali2];

const Products = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // ⏱️ Slide banner every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bannerImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // 📦 Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError("");
      try {
        const { data } = await axios.get("http://localhost:5000/api/products");
        console.log("raw products response:", data);
        // handle common response shapes
        if (Array.isArray(data)) {
          setProducts(data);
        } else if (data && Array.isArray(data.products)) {
          setProducts(data.products);
        } else {
          setProducts([]);
          setError("Unexpected response format from API. Check backend.");
        }
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to load products. Check backend or console for CORS/errors.");
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const categories = ["electronics", "clothing", "accessories"];

  const filteredProducts = category
    ? products.filter((product) => product.category === category)
    : products;

  return (
    <div className="products-page">
      {/* 🪔 Diwali Image Banner */}
      <div className="banner-slider">
        <img
          src={bannerImages[currentIndex]}
          alt="Diwali Offer"
          className="banner-image"
        />
      </div>

      {/* 📂 Category Menu */}
      <div className="category-menu">
        <Link to="/products" className={!category ? "active" : ""}>
          All Products
        </Link>
        {categories.map((cat) => (
          <Link
            key={cat}
            to={`/products/${cat}`}
            className={category === cat ? "active" : ""}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </Link>
        ))}
      </div>

      {/* Loading / Error / Empty states */}
      {loading && <p style={{ textAlign: "center" }}>Loading products…</p>}
      {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
      {!loading && !error && filteredProducts.length === 0 && (
        <p style={{ textAlign: "center" }}>No products found.</p>
      )}

      {/* 🛍️ Product Grid */}
      <div className="products-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product._id || product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
// ...existing code...