import React, { useState } from "react";

function RangeSlider(props) {
  const [amount, setAmount] = useState(1000); // Initial beløb

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
    props.onChangeAmount(e.target.value); // Send det valgte beløb til forældrekomponenten
  };

  return (
    <div>
      <label htmlFor="amount">Select amount: €{amount}</label>
      <input
        type="range"
        id="amount"
        min={1000} //1000€
        max={100000} //100.000€
        step={500} // Opdater trin op/ned med 500€
        value={amount}
        onChange={handleAmountChange}
      />
    </div>
  );
}

export default RangeSlider;
