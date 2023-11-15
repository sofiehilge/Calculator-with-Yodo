import React, { useState } from "react";
import Echart from "./component/Echart";
import CalcButtons from "./component/CalcButtons";
import OutputComp from "./component/OutputComp";
import RangeSlider from "./component/RangeSlider";
import StyledSlider from "./component/StyledSlider";

function App() {
  const [updatedInputValue, setUpdatedInputValue] = useState(0);
  const [selectedPlan, setSelectedPlan] = useState(2.5);
  const [totalValue, setTotalValue] = useState(1000);

  const handleInputValue = (inputValue) => {
    setUpdatedInputValue(inputValue);
  };

  const handlePlanChange = (plan) => {
    setSelectedPlan(plan);
  };

  const handleAmountChange = (inputValue) => {
    console.log(`Selected amount: ${inputValue}`);
    setTotalValue(inputValue);
  };
  return (
    <>
      <h1 className="flex justify-center p-4 text-[30px] font-bold text-[#3183CC]">
        withyodo.com
      </h1>
      <CalcButtons
        handleInputValue={handleInputValue}
        handlePlanChange={handlePlanChange}
        totalValue={totalValue}
      />
      <div className="p-10 m-4 border-2 border-[#3183CC] rounded-xl bg-[#white]">
        <Echart updatedInputValue={updatedInputValue} />
        <OutputComp
          updatedInputValue={updatedInputValue}
          selectedPlan={selectedPlan}
        />
      
        <StyledSlider value={totalValue} onChangeAmount={handleAmountChange}/>
      </div>
    </>
  );
}

export default App;
