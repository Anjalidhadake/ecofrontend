
import React from "react";

const CartItem = ({ item, onRemove }) => {
  return (
    <div className="cart-item">
      <div>
        <h3>{item.name}</h3>
        <p>Price: {item.price}</p>
      </div>
      <button
        onClick={() => onRemove(item.id)}
        style={{
          padding: "5px 10px",
          backgroundColor: "#e74c3c",
          color: "#fff",
          border: "none",
          borderRadius: "3px",
          cursor: "pointer",
        }}
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
