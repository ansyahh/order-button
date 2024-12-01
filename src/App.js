import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleOrderClick = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setIsAnimating(false);
      }, 10000); // Durasi animasi
    }
  };

  return (
    <div className="container">
      <button className={`order ${isAnimating ? "animate" : ""}`} onClick={handleOrderClick}>
        <span className="default">Complete Order</span>
        <span className="success">
          Order Placed
          <svg viewBox="0 0 12 10">
            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
          </svg>
        </span>
        <div className="box"></div>
        <div className="truck">
          <div className="back"></div>
          <div className="front">
            <div className="window"></div>
          </div>
          <div className="light top"></div>
          <div className="light bottom"></div>
        </div>
        <div className="lines"></div>
      </button>
    </div>
  );
};

export default App;
