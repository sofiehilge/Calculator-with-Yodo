import React, { useState, useEffect } from "react";

function RangeSlider({ value, onChangeAmount }) {
  const [amount, setAmount] = useState(1000);
  const [formattedAmount, setFormattedAmount] = useState("");

  const formatAmount = (value) => {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "EUR",
    });
    return formatter.format(value);
  };
  useEffect(() => {
    setFormattedAmount(formatAmount(amount));
  }, [amount]);

  const handleAmountChange = (e) => {
    const newAmount = parseInt(e.target.value, 10);
    setAmount(newAmount);
    onChangeAmount(newAmount);
  };

  return (
    <>
      {/* <label htmlFor="amount" className="flex justify-center mt-6 text-lg">
        Select amount: {amount}€
      </label> */}
      <div className="container">
        <div>{amount}</div>
        <div className="range-slider">
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
        <div>
          <span>1.000€</span>
          <span>100.000€</span>
        </div>
      </div>
    </>
  );
}

export default RangeSlider;
