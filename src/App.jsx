import React, { useState } from "react";
import Echart from "./component/Echart";
import FormHaris from "./component/FormHaris";
import OutputComp from "./component/OutputComp";

function App() {
  const [updatedInputValue, setUpdatedInputValue] = useState(0);
  const [selectedPlan, setSelectedPlan] = useState(2.5);

  const handleInputValue = (inputValue) => {
    setUpdatedInputValue(inputValue);
  };

  const handlePlanChange = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <>
      <h1 className="flex justify-center p-4 text-[30px] font-bold text-white">
        withyodo.com
      </h1>
      <FormHaris
        handleInputValue={handleInputValue}
        handlePlanChange={handlePlanChange}
        selectedPlan={selectedPlan}
      />
      <div className="m-4 border rounded bg-gray-100/50 solid">
        <Echart updatedInputValue={updatedInputValue} />
        <OutputComp
          updatedInputValue={updatedInputValue}
          selectedPlan={selectedPlan}
        />
      </div>
    </>
  );
}

export default App;
