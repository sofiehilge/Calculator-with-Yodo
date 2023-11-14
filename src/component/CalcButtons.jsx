import React, { useState, useEffect } from "react";

const CalcButtons = ({ handleInputValue, handlePlanChange, totalValue }) => {
  // Options
  const options = [
    { label: "Good Plan (5%)", value: 5 },
    { label: "Free Plan (2.5%)", value: 2.5 },
  ];

  // Håndter og opdater værdier
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

    return isNaN(calculatedOutput) ? 0 : calculatedOutput;
  };

  // Opdater totalValue og obtainedValue efter beregning
  useEffect(() => {
    const calculatedOutput = calculate();
    setOutput(calculatedOutput);
    handleInputValue(totalValue);
    handlePlanChange(obtainedValue);
  }, [totalValue, obtainedValue, handleInputValue, handlePlanChange]);

  // Opdater state ved ændring af obtainedValue
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
                ? option.value === 5
                  ? "bg-[#194266] text-white"
                  : option.value === 2.5
                  ? "bg-[#3183CC] text-white"
                  : "bg-black text-white"
                : "bg-black text-white"
            }`}
            onClick={() => setObtainedValue(option.value)}
          >
            {option.label}
          </button>
        ))}
      </form>
    </div>
  );
};

export default CalcButtons;

//border-2 border-[#3183CC]
