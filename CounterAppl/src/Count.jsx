import React, { useState } from "react";
import "./Count.css";

function Count() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount(prev => prev + 1);
  const handleDecrement = () => setCount(prev => prev - 1);

  const adjustedDate = new Date();
  adjustedDate.setDate(adjustedDate.getDate() + count);

  return (
    <div className="container">
      <h1 className="title">Counter Game</h1>

      <div className="counter-row">
        <button
          className="button"
          onClick={handleIncrement}
          aria-label="Increment count"
        >
          +
        </button>

        <p className="count-text" aria-live="polite">{count}</p>

        <button
          className="button"
          onClick={handleDecrement}
          aria-label="Decrement count"
        >
          -
        </button>
      </div>

      <p className="date-text">Date: {adjustedDate.toDateString()}</p>
    </div>
  );
}

export default Count;
