import { useState, useEffect } from "react";
import RangeSlider from "./RangeSlider";
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
      <div className="pb-4 flex-col text-center">
        <label className="text-blue-500">
          Which plan are you interested in?
          <select
            className="w-full"
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
      </div>
      <div className="pb-4 flex-col text-center">
        <label className="text-blue-500 mt-8">
          How much would you like to start with?
          <RangeSlider />
        </label>
      </div>
      <h2 className="text-blue-500 flex-col text-center">
        Your output is € {output === Infinity ? 0 : output}
      </h2>
    </form>
  );
};

export default Form;
