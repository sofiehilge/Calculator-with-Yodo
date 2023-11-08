import React, { useState } from "react";

function RangeSlider() {
  const [amount, setAmount] = useState(10); // Start beløb

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  return (
    <div>
      <label htmlFor="amount">Select amount: {amount} €</label>
      <input
        type="range"
        id="amount"
        min={0}
        max={1000}
        step={10} // Opdater trinværdien til 10 kr
        value={amount}
        onChange={handleAmountChange}
      />
    </div>
  );
}

export default RangeSlider;
