import React, { useState, useEffect } from "react";
import RangeSlider from "./RangeSlider";

const Form = () => {
  const options = [
    { label: "Free Plan (2.5%)", value: 2.5 },
    { label: "Good Plan (4.5%)", value: 4.5 },
  ];

  const [obtainedValue, setObtainedValue] = useState(2.5);
  const [totalValue, setTotalValue] = useState(0);
  const [output, setOutput] = useState(0);

  useEffect(() => {
    calculate();
  }, [totalValue, obtainedValue]);

  const handleChange = (e) => {
    const value = e.target.value;
    const parsedValue = value.replace(/[^0-9.,]/g, "");
    setTotalValue(parsedValue ? parseFloat(parsedValue.replace(",", ".")) : 0);
  };

  const handleAmountChange = (amount) => {
    setTotalValue(amount);
  };

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

    setOutput(calculatedOutput);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculate();
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <label className="block text-blue-500 mb-4">
          Which plan are you interested in?
          <select
            required
            value={obtainedValue}
            onChange={(e) => setObtainedValue(parseFloat(e.target.value))}
            className="block w-full bg-gray-200 border border-gray-400 p-2 rounded"
          >
            {options.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-blue-500 mb-4">
          How much would you like to start with?
          <RangeSlider onChangeAmount={handleAmountChange} />
        </label>
        <h1 className="text-blue-500 mb-4">
          Your output is € {output === Infinity ? 0 : output}
        </h1>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Calculate
        </button>
      </form>
    </div>
  );
};

export default Form;
