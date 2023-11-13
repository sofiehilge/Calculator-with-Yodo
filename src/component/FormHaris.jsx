import React, { useState, useEffect } from "react";
import RangeSlider from "./RangeSlider";

const FormHaris = ({ handleInputValue, handlePlanChange }) => {
  // Options
  const options = [
    { label: "Free Plan (2.5%)", value: 2.5 },
    { label: "Good Plan (5%)", value: 5 },
  ];

  // Handle and update values
  const [obtainedValue, setObtainedValue] = useState(2.5);
  const [totalValue, setTotalValue] = useState(1000);
  const [output, setOutput] = useState(0);

  // Calculate function
  const calculate = () => {
    const totalValueNum = parseFloat(totalValue);
    let calculatedOutput = 0;

    if (!isNaN(totalValueNum) && totalValueNum !== 0) {
      calculatedOutput = totalValueNum * (obtainedValue / 100);
    }

    return isNaN(calculatedOutput) ? 0 : calculatedOutput;
  };

  // Update totalValue and obtainedValue after calculation
  useEffect(() => {
    const calculatedOutput = calculate();
    setOutput(calculatedOutput);
    handleInputValue(totalValue);
  }, [totalValue, obtainedValue]);

  // Update state when changing obtainedValue
  useEffect(() => {
    const calculatedOutput = calculate();
    setOutput(calculatedOutput);
    handleInputValue(totalValue);
  }, [totalValue, obtainedValue]);

  const handleAmountChange = (inputValue) => {
    setTotalValue(inputValue);
    handlePlanChange(obtainedValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculate();
    handleInputValue(totalValue);
  };

  return (
    <div className="items-center justify-center w-full p-4">
      <form
        onSubmit={handleSubmit}
        className="flex w-full gap-4 p-8 text-center"
      >
        {options.map((option, index) => (
          <button
            key={index}
            className={`p-3 w-full rounded-full ${
              obtainedValue === option.value
                ? "bg-black text-white"
                : "bg-white text-black"
            }`}
            onClick={() => setObtainedValue(option.value)}
          >
            {option.label}
          </button>
        ))}
        <div>
          <RangeSlider onChangeAmount={handleAmountChange} />
        </div>
      </form>
    </div>
  );
};

export default FormHaris;
