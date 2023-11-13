import React, { useState } from "react";

function RangeSlider(props) {
  const [amount, setAmount] = useState(1000); // Initial beløb

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
    props.onChangeAmount(e.target.value); // Send det valgte beløb til forældrekomponenten
  };

  return (
    <div className="">
      <label htmlFor="amount" className="flex mt-4 text-lg ">
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
        className="w-full h-1 bg-white rounded appearance-none focus:outline-none focus:shadow-outline"
      />
    </div>
  );
}

export default RangeSlider;
