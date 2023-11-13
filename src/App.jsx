import React, { useState } from "react";
import Echart from "./component/Echart";
import FormHaris from "./component/FormHaris";
import OutputComp from "./component/OutputComp";
import RangeSlider from "./component/RangeSlider";

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
    setTotalValue(inputValue);
  };
  return (
    <>
      <h1 className="flex justify-center p-4 text-[30px] font-bold text-white">
        withyodo.com
      </h1>
      <FormHaris
        handleInputValue={handleInputValue}
        handlePlanChange={handlePlanChange}
       totalValue={totalValue}
      />
      <OutputComp
        updatedInputValue={updatedInputValue}
        selectedPlan={selectedPlan}
      />
      <div className="m-4 border rounded-xl solid bg-[#F6F6F6] px-10 py-10" >
        <Echart updatedInputValue={updatedInputValue} />
        <RangeSlider value={totalValue} onChangeAmount={handleAmountChange} />
      </div>
    </>
  );
}

export default App;
