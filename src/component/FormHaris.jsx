import React, { useState, useEffect } from "react";
import RangeSlider from "./RangeSlider";

const FormHaris = ({ handleInputValue, handlePlanChange }) => {
  // Options
  const options = [
    { label: "Free Plan (2.5%)", value: 2.5 },
    { label: "Good Plan (4.5%)", value: 4.5 },
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
      if (obtainedValue === 2.5) {
        calculatedOutput = totalValueNum * 0.025;
      } else if (obtainedValue === 4.5) {
        calculatedOutput = totalValueNum * 0.045;
      }
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
    handlePlanChange(obtainedValue); // Opdater denne linje for at sende den rigtige værdi
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
        <label className="flex-col">
          Which plan are you interested in?
          <select
            required
            value={obtainedValue}
            onChange={(e) => setObtainedValue(parseFloat(e.target.value))}
            className="block w-full bg-white border border-black rounded"
          >
            {options.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
        <div>
          <RangeSlider onChangeAmount={handleAmountChange} />
        </div>
        <h2 className="flex">Your output after one year €{output}</h2>
      </form>
    </div>
  );
};

export default FormHaris;
