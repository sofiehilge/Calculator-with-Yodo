import React from "react";
import { useState, useEffect } from "react";

const Form = () => {
  // options
  const options = [
    { label: "Free Plan (2.5%)", value: 2.5 },
    { label: "Good Plan (4.5%)", value: 4.5 },
  ];

  //handle and update value
  const [obtainedValue, setObtainedValue] = useState(0);
  const [totalValue, setTotalValue] = useState(0);
  const [output, setOutput] = useState(0);
  const [inputValue, setInputValue] = useState("");

  //update state on initial render
  useEffect(() => {
    setObtainedValue(2.5);
  }, []);

  //update state when changing inputValue
  useEffect(() => {
    calculate();
  }, [inputValue]);

  //update state when changing inputValue
  useEffect(() => {
    calculate();
  }, [obtainedValue]);

  //inputfield only accepts numbers and setValue
  const handleChange = (e) => {
    const value = e.target.value;
    const parsedValue = value.replace(/[^0-9.,]/g, "");
    setInputValue(parsedValue);
    setTotalValue(parsedValue ? parseFloat(parsedValue.replace(",", ".")) : 0); //set to 0 if the parsedValue is empty
  };
  //calculate percentage
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
    calculate;
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
      <button type="submit">Calculate</button>
      <h4>Your output is {output === Infinity ? 0 : output}</h4>
    </form>
  );
};

export default Form;
