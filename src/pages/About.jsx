// ...existing code...
import React from "react";
import "./About.css";

const About = () => {
  return (
    <main className="main-container about-page">
      <section className="about-hero">
        <h1>About E-Shop</h1>
        <p className="lead">
          Curated products, great prices and fast delivery — we make online shopping
          simple, trustworthy and enjoyable.
        </p>
      </section>

      <section className="about-grid">
        <div className="card">
          <h2>Our Mission</h2>
          <p>
            To bring joy to online shopping by offering a wide range of quality products,
            great prices and exceptional customer service.
          </p>
        </div>

        <div className="card">
          <h2>Our Values</h2>
          <ul className="values-list">
            <li><strong>Quality</strong> — High standards for every product.</li>
            <li><strong>Customer First</strong> — Support that cares.</li>
            <li><strong>Innovation</strong> — Continuous improvement.</li>
            <li><strong>Integrity</strong> — Honest and transparent service.</li>
          </ul>
        </div>

        <div className="card team-card">
          <h2>Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="avatar" aria-hidden="true">JD</div>
              <div>
                <strong>Jane Doe</strong>
                <div className="muted">Founder & CEO</div>
              </div>
            </div>
            <div className="team-member">
              <div className="avatar" aria-hidden="true">AS</div>
              <div>
                <strong>Alex Smith</strong>
                <div className="muted">Head of Product</div>
              </div>
            </div>
            <div className="team-member">
              <div className="avatar" aria-hidden="true">RK</div>
              <div>
                <strong>Rita Kumar</strong>
                <div className="muted">Customer Success</div>
              </div>
            </div>
          </div>
        </div>

        <div className="card contact-card">
          <h2>Contact</h2>
          <p>If you have questions or feedback, reach us at:</p>
          <p><strong>support@eshop.com</strong></p>
          <a className="btn-primary" href="mailto:support@eshop.com">Email Support</a>
        </div>
      </section>
    </main>
  );
};

export default About;
// ...existing code...