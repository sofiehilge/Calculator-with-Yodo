import React, { useState, useEffect } from "react";

function RangeSlider({ value, onChangeAmount }) {
  const [amount, setAmount] = useState(1000); // Initial beløb
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
    onChangeAmount(newAmount); // Send det valgte beløb til forældrekomponenten
  };

  return (
    <>
      <label htmlFor="amount" className="flex justify-center mt-6 text-lg">
        Select amount: {amount}€
      </label>
      <input
        type="range"
        id="amount"
        min={1000} //1000€
        max={100000} //100.000€
        step={500} // Opdater trin op/ned med 500€
        value={amount}
        onChange={handleAmountChange}
        className="w-full h-1 bg-white rounded appearance-none focus:outline-none"
      />
    </>
  );
}

export default RangeSlider;
