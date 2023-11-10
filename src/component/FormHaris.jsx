import React, { useState, useEffect } from "react";
import RangeSlider from "./RangeSlider";

const FormHaris = ({ handleInputValue }) => {
  //options
  const options = [
    { label: "Free Plan (2.5%)", value: 2.5 },
    { label: "Good Plan (4.5%)", value: 4.5 },
  ];
  //handle and update value
  const [obtainedValue, setObtainedValue] = useState(2.5);
  const [totalValue, setTotalValue] = useState(1000);
  const [output, setOutput] = useState(0);

  //calculate function
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

  //update totalValue and ontainedValue after calc
  useEffect(() => {
    const calculatedOutput = calculate();
    setOutput(calculatedOutput);
    handleInputValue(totalValue);
  }, [totalValue, obtainedValue]);

  //update state when changing obtainedValue
  useEffect(() => {
    const calculatedOutput = calculate();
    setOutput(calculatedOutput);
    handleInputValue(totalValue);
  }, [totalValue, obtainedValue]);

  const handleAmountChange = (inputValue) => {
    setTotalValue(inputValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculate();
    console.log("input value:", inputValue);
    handleInputValue(inputValue);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md"
      >
        <label className="block mb-4 text-blue-500">
          Which plan are you interested in?
          <select
            required
            value={obtainedValue}
            onChange={(e) => setObtainedValue(parseFloat(e.target.value))}
            className="block w-full p-2 bg-gray-200 border border-gray-400 rounded"
          >
            {options.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
        <label className="block mb-4 text-blue-500">
          How much would you like to start with?
          <RangeSlider onChangeAmount={handleAmountChange} />
        </label>
        <h1 className="mb-4 text-blue-500">Your output after one year € {output}</h1>
      </form>
    </div>
  );
};

export default FormHaris;
