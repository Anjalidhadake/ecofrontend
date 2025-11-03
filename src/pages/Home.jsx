// ...existing code...
import React from "react";
import "./Home.css";

const featuredProducts = [
  { id: 1, name: "Eco Tote Bag", price: "19.99", img: "https://via.placeholder.com/320x200?text=Eco+Tote", desc: "Durable, reusable cotton tote." },
  { id: 2, name: "Bamboo Toothbrush", price: "4.99", img: "https://via.placeholder.com/320x200?text=Bamboo+Brush", desc: "Biodegradable handle, soft bristles." },
  { id: 3, name: "Insulated Bottle", price: "24.99", img: "https://via.placeholder.com/320x200?text=Insulated+Bottle", desc: "Keeps drinks hot or cold for hours." }
];

const Home = () => {
  return (
    <main className="home-page">
      <section className="hero" aria-label="Welcome hero">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to E-Shop</h1>
          <p className="hero-sub">Curated products, great prices, fast delivery. Shop smart — live better.</p>
          <div>
            <a className="btn-primary" href="/products" aria-label="Shop now">Shop Now</a>
            <a className="btn-secondary" href="/about" style={{ marginLeft: 8 }}>Learn More</a>
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <img src="https://via.placeholder.com/480x300?text=Featured+Collection" alt="" />
        </div>
      </section>

      <section className="features" aria-label="site features">
        <div className="feature">
          <h3>Free Shipping</h3>
          <p>On orders over $50 across the country.</p>
        </div>
        <div className="feature">
          <h3>Secure Payments</h3>
          <p>Multiple secure payment options.</p>
        </div>
        <div className="feature">
          <h3>Easy Returns</h3>
          <p>30-day returns & responsive support.</p>
        </div>
      </section>

      
      <section className="testimonial" style={{ marginTop: 20 }}>
        <blockquote>
          "Excellent products and fast delivery — highly recommend!"
        </blockquote>
        <cite>— Happy Customer</cite>
      </section>
    </main>
  );
};

export default Home;
// ...existing code...
