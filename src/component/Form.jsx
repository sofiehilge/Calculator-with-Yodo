import React from "react";
import { useState, useEffect } from "react";

const Form = ({ handleInputValue }) => {
  // options
  const options = [
    { label: "Free Plan (2.5%)", value: 2.5 },
    { label: "Good Plan (4.5%)", value: 4.5 },
  ];

  //handle and update value
  const [obtainedValue, setObtainedValue] = useState(100);
  const [totalValue, setTotalValue] = useState(100);
  const [inputValue, setInputValue] = useState(100);
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

  const [output, setOutput] = useState(2.5);

  //update state on initial render
  useEffect(() => {
    setObtainedValue(2.5);
  }, []);

  //update state when changing inputValue
  useEffect(() => {
    const calculatedOutput = calculate();
    setOutput(calculatedOutput);
    handleInputValue(inputValue);
  }, [inputValue, obtainedValue]);

  //update state when changing obtainedValue
  useEffect(() => {
    const calculatedOutput = calculate();
    setOutput(calculatedOutput);
  }, [obtainedValue]);

  // Add this useEffect for initial calculation
  useEffect(() => {
    const calculatedOutput = calculate();
    setOutput(calculatedOutput);
    handleInputValue(inputValue);
  }, []);

  //inputfield only accepts numbers and setValue
  const handleChange = (e) => {
    const value = e.target.value;
    const parsedValue = value.replace(/[^0-9.,]/g, "");
    setInputValue(parsedValue);
    setTotalValue(parsedValue ? parseFloat(parsedValue.replace(",", ".")) : 0); //set to 0 if the parsedValue is empty
  };

  useEffect(() => {
    calculate();
    handleInputValue(inputValue);
  }, [inputValue, obtainedValue]);

  // Add this useEffect for initial calculation
  useEffect(() => {
    calculate();
  }, []); // empty dependency array

  const handleSubmit = (e) => {
    e.preventDefault();
    calculate();
    console.log("input value:", inputValue);
    handleInputValue(inputValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Which plan are you interested in?
        <select
          required
          value={obtainedValue}
          onChange={(e) => setObtainedValue(parseFloat(e.target.value))}
        >
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
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
      <h4>Your output is {output} EUR</h4>
    </form>
  );
};

export default Form;
