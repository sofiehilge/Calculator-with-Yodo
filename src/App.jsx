import React, { useCallback, useEffect, useState } from "react";
import Echart from "./component/Echart";
import CalcButtons from "./component/CalcButtons";
import OutputComp from "./component/OutputComp";
//import RangeSlider from "./component/RangeSlider";
import StyledSlider from "./component/StyledSlider";
import CurrencySelector from "./component/CurrencySelector";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [updatedInputValue, setUpdatedInputValue] = useState(0);
  const [selectedPlan, setSelectedPlan] = useState(2.5);
  const [totalValue, setTotalValue] = useState(1000);
  const [selectedCurrency, setSelectedCurrency] = useState("eur");

  const handleInputValue = (inputValue) => {
    setUpdatedInputValue(inputValue);
  };

  const handlePlanChange = (plan) => {
    setSelectedPlan(plan);
  };

  //currency convertion:
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);

  const { data: currencyInfo, error } = useCurrencyInfo(selectedCurrency);
  const options = Object.keys(currencyInfo);

  const convert = useCallback(() => {
    if (currencyInfo && Object.keys(currencyInfo).length > 0) {
      setConvertedAmount(amount * currencyInfo[selectedCurrency]);
    }
  }, [amount, currencyInfo, selectedCurrency]);

  //updating input value in styledslider

  const handleAmountChange = (inputValue) => {
    console.log(`Selected amount: ${inputValue}`);
    setTotalValue(inputValue);
    setAmount(inputValue);
  };

  return (
    <>
      <div className="flex lg:flex-row">
        <div className="lg:w-[565px] p-4">
          <h1 className=" text-lg font-bold m-4 uppercase">
            Calculate your Balanced Output
          </h1>
          <p className="text-gray-500 text-base m-4 ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
            quia rem voluptates et aliquid, quas velit sit vero sint. Harum
            velit necessitatibus minima expedita aspernatur est porro
            praesentium facere veniam? Ullam mollitia veritatis quasi
            perferendis ipsa laborum voluptatem provident ab culpa, laudantium
            odio soluta optio atque. Et mollitia vel impedit saepe
            exercitationem adipisci explicabo, aliquam error pariatur labore
            esse. Animi!
          </p>
        </div>

        <div className=" sm:grid sm:grid-cols-3 gap-4">
          <div className="relative sm:col-span-3 p-4 border-2 border-[#3183CC] rounded-xl bg-[#white] w-[358.4px] h-[300px]">
            <Echart updatedInputValue={updatedInputValue} />
            <OutputComp
              updatedInputValue={updatedInputValue}
              selectedPlan={selectedPlan}
            />

            <StyledSlider
              value={totalValue}
              onChangeAmount={handleAmountChange}
              selectedCurrency={selectedCurrency}
              currencyInfo={currencyInfo}
            />

            <div className=" absolute bottom-56 right-0">
              {/* calc buttons in the top corner of Echart */}
              <CalcButtons
                handleInputValue={handleInputValue}
                handlePlanChange={handlePlanChange}
                totalValue={totalValue}
              />
            </div>
          </div>
          <CurrencySelector
            currencyOptions={options}
            selectedCurrency={selectedCurrency}
            onCurrencyChange={(currency) => setSelectedCurrency(currency)}
          />
        </div>
      </div>
    </>
  );
}

export default App;
