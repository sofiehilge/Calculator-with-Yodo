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
