import React, { useState, useEffect } from "react";

const CalcButtons = ({ handleInputValue, handlePlanChange, totalValue }) => {
  const options = [
    { label: "Good Plan (5%)", value: 5 },
    { label: "Free Plan (2.5%)", value: 2.5 },
  ];

  const [obtainedValue, setObtainedValue] = useState(2.5);
  const [output, setOutput] = useState(0);

  // Beregningsfunktion
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
    return isNaN(calculatedOutput)
      ? 0
      : calculatedOutput.toLocaleString("en-US", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        });
  };

  useEffect(() => {
    const calculatedOutput = calculate();
    setOutput(calculatedOutput);
    handleInputValue(totalValue);
    handlePlanChange(obtainedValue);
  }, [totalValue, obtainedValue, handleInputValue, handlePlanChange]);

  useEffect(() => {
    const calculatedOutput = calculate();
    setOutput(calculatedOutput);
    handleInputValue(totalValue);
  }, [totalValue, obtainedValue]);

  const handleSubmit = (e) => {
    e.preventDefault();
    calculate();
    handleInputValue(totalValue);
  };

  return (
    <div className="items-center justify-center w-full">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full gap-1 p-5 text-center"
      >
        {options.map((option, index) => (
          <button
            key={index}
            className={`w-28 text-xs rounded-full ${
              obtainedValue === option.value
                ? option.value === 5
                  ? "bg-[#194266] text-white"
                  : option.value === 2.5
                  ? "bg-[#3183CC] text-white"
                  : "bg-black text-white"
                : "bg-black text-white"
            }`}
            onClick={() => setObtainedValue(option.value)}
            style={{
              transition: "transform 0.2s ease",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.1)")
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            onFocus={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
            onBlur={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            {option.label}
          </button>
        ))}
      </form>
    </div>
  );
};

export default CalcButtons;
