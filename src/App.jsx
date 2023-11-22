// App.js
import React, { useState } from "react";
import Echart from "./component/Echart";
import CalcButtons from "./component/CalcButtons";
import OutputComp from "./component/OutputComp";
import StyledSlider from "./component/StyledSlider";
import "./index.css"; // Importerer CSS-stilen
import CurrencyConverter from "./component/CurrencyConverter";
import StyledSelector from "./component/StyledSelector";

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
      <div className="container">
        <div className="header lg:w-[565px] p-4 ">
          <CurrencyConverter />
        </div>

        <div className="border-2 border-[#3183CC] rounded content">
          <div className="relative sm:col-span-3 p-4 bg-[#white] w-[358.4px] h-[300px]">
            <Echart updatedInputValue={updatedInputValue} />
            <OutputComp
              updatedInputValue={updatedInputValue}
              selectedPlan={selectedPlan}
            />

            <StyledSlider
              value={totalValue}
              onChangeAmount={handleAmountChange}
            />
            <div className="absolute right-0 bottom-56">
              <CalcButtons
                handleInputValue={handleInputValue}
                handlePlanChange={handlePlanChange}
                totalValue={totalValue}
              />
            </div>
          </div>
        </div>
      </div>
   {/*    <StyledSelector/> */}
    </>
  );
}

export default App;
