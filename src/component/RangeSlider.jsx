import React, { useState } from "react";

function RangeSlider(props) {
  const [amount, setAmount] = useState(50); // Initial beløb

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
    props.onChangeAmount(e.target.value); // Send det valgte beløb til forældrekomponenten
  };

  return (
    <div>
      <label htmlFor="amount">Select amount: {amount} €</label>
      <input
        type="range"
        id="amount"
        min={10}
        max={1000}
        step={5} // Opdater trin op/ned med 10€
        value={amount}
        onChange={handleAmountChange}
      />
    </div>
  );
}

export default RangeSlider;