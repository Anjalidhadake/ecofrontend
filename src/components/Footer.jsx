// ...existing code...
import React, { useState } from "react";
// ...existing code...
// changed code
import "./NavFoot.css";
// ...existing code...

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subMessage, setSubMessage] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) {
      setSubMessage("Please enter an email.");
      return;
    }
    // stubbed subscribe behavior
    setSubMessage("Thanks — we'll keep you updated!");
    setEmail("");
  };

  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-brand">
          <h2>E-Shop 🛒</h2>
          <p>Your one-stop shop for all your needs!</p>
          <p className="muted">Support: <a href="mailto:support@eshop.com">support@eshop.com</a> • +1 (555) 123-4567</p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
             <li><a href="/about">About Us</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/cart">Cart</a></li>
          </ul>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>
          <p>
            <a href="#" aria-label="Twitter">🐦 Twitter</a> &nbsp;
            <a href="#" aria-label="Facebook">📘 Facebook</a> &nbsp;
            <a href="#" aria-label="Instagram">📸 Instagram</a>
          </p>

          <h3 style={{marginTop:12}}>Newsletter</h3>
          <form onSubmit={handleSubscribe} style={{marginTop:8, display:"flex", gap:8}}>
            <input
              type="email"
              placeholder="you@domain.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{padding:"8px 10px", borderRadius:6, border:"1px solid rgba(255,255,255,0.15)"}}
            />
            <button type="submit" className="subscribe-btn" style={{padding:"8px 12px", borderRadius:6}}>Subscribe</button>
          </form>
          {subMessage && <div style={{marginTop:8, color:"#fff", opacity:0.9}}>{subMessage}</div>}
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-inner" style={{alignItems:"center", justifyContent:"space-between"}}>
          <p>&copy; 2025 E-Shop. All rights reserved.</p>
          <div className="payments muted" style={{fontSize:14}}>
            {/* placeholders for payment icons */}
            <span>💳 Visa</span>&nbsp; <span>🅿️ PayPal</span>&nbsp; <span>🟦 MasterCard</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
// ...existing code...