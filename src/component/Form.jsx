/* import React, { useState, useEffect } from "react";

const Form = ({ handleInputValue }) => {
  // options
  const options = [
    { label: "Free Plan (2.5%)", value: 2.5 },
    { label: "Good Plan (5%)", value: 5 },
  ];

  // handle and update value
  const [obtainedValue, setObtainedValue] = useState(2.5);
  const [totalValue, setTotalValue] = useState(100);
  const [inputValue, setInputValue] = useState(100);

  useEffect(() => {
    calculate();
    handleInputValue(inputValue);
  }, [inputValue, obtainedValue]);

  // Add this useEffect for initial calculation
  useEffect(() => {
    calculate();
  }, []); // empty dependency array

  const handleButtonClick = (value) => {
    setObtainedValue(value);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const parsedValue = value.replace(/[^0-9.,]/g, "");
    setInputValue(parsedValue);
    setTotalValue(parsedValue ? parseFloat(parsedValue.replace(",", ".")) : 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculate();
    handleInputValue(inputValue);
  };

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
    setOutput(calculatedOutput);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex">
        <label>
          {options.map((option, index) => (
            <button
              key={index}
              type="button"
              className={`${
                obtainedValue === option.value
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-black"
              } p-2 m-1 rounded`}
              onClick={() => handleButtonClick(option.value)}
            >
              {option.label}
            </button>
          ))}
        </label>
      </div>
      <div>
        <label>
          How much would you like to start with?
          <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            placeholder="Enter numbers"
            required
          />
        </label>
      </div>
      <h2>Your output is {output} EUR</h2>
    </form>
  );
};

export default Form;
 */
