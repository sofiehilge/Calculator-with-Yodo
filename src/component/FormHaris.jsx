import React, { useState, useEffect } from "react";

const FormHaris = ({
  handleInputValue,
  handlePlanChange,
  totalValue,
  handleAmountChange,
}) => {
  // Options
  const options = [
    { label: "Free Plan (2.5%)", value: 2.5 },
    { label: "Good Plan (5%)", value: 5 },
  ];

  // Handle and update values
  const [obtainedValue, setObtainedValue] = useState(2.5);
  const [output, setOutput] = useState(0);

  // Calculate function
  const calculate = () => {
    const totalValueNum = parseFloat(totalValue);
    let calculatedOutput = 0;

    if (!isNaN(totalValueNum) && totalValueNum !== 0) {
      if (obtainedValue === 2.5) {
        calculatedOutput = totalValueNum * 0.025;
      } else if (obtainedValue === 5) {
        calculatedOutput = totalValueNum * 0.05;
      }

    }

    return isNaN(calculatedOutput) ? 0 : calculatedOutput;
  };

  // Update totalValue and obtainedValue after calculation
  useEffect(() => {
    const calculatedOutput = calculate();
    setOutput(calculatedOutput);
    handleInputValue(totalValue);
    handlePlanChange(obtainedValue);
  }, [totalValue, obtainedValue, handleInputValue, handlePlanChange]);

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
                ? "bg-black text-white border-orange-400"
                : "bg-white text-black border-gray-300 hover:bg-gray-200"
            }`}
            onClick={() => setObtainedValue(option.value)}
          >
            {options.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
            {option.label}
          </button>
        ))}
        <div>
          <RangeSlider onChangeAmount={handleAmountChange} />
        </div>

        <h2 className="flex">Your output after one year €{output}</h2>
      </form>
    </div>
  );
};

export default FormHaris;
