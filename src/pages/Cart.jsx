import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Cart.css";
const CartItem = ({ item, onRemove, onQuantityChange }) => (
  <div className="cart-item">
    <img src={`http://localhost:5000${item.image}`} alt={item.name} width={80} />
    <div>
      <h4>{item.name}</h4>
      <p>Price: ${item.price}</p>
      <p>Quantity: 
        <button onClick={() => onQuantityChange(item._id, -1)}>-</button>
        {item.quantity}
        <button onClick={() => onQuantityChange(item._id, 1)}>+</button>
      </p>
      <button onClick={() => onRemove(item._id)}>Remove</button>
    </div>
  </div>
);

const Cart = () => {
  const { state } = useLocation();
  const [cart, setCart] = useState(state?.cart || []);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  const handleRemove = (itemId) => {
    const updatedCart = cart.filter((item) => item._id !== itemId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleQuantityChange = (itemId, delta) => {
    const updatedCart = cart.map((item) => {
      if (item._id === itemId) {
        const newQty = item.quantity + delta;
        return { ...item, quantity: newQty > 0 ? newQty : 1 };
      }
      return item;
    });
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="main-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <CartItem
              key={item._id}
              item={item}
              onRemove={handleRemove}
              onQuantityChange={handleQuantityChange}
            />
          ))}
          <h3>Total: ${totalPrice.toFixed(2)}</h3>
        </>
      )}
    </div>
  );
};

export default Cart;
