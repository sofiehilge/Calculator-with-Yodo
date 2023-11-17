import React, { useState } from "react";
import useCurrencyInfo from "../hooks/useCurrencyInfo.js";
import InputBox from "./inputBox.jsx";


function CurrencyConverter() {
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("eur");
  const [to, setTo] = useState("dkk");
  const [convertedAmount, setConvertedAmount] = useState("");

  const { data: currencyInfo, error } = useCurrencyInfo(from); //calling the custom hook
  const options = Object.keys(currencyInfo);

  const swap = () => {
    //swap from and to
    const newFrom = to;
    const newTo = from;

    //calculate the new converted amount based on the updated from and to
    const newConvertedAmount = amount * currencyInfo[to];

    //uodate from, to and the converted amount
    setFrom(newFrom);
    setTo(newTo);
    setConvertedAmount(newConvertedAmount);

    //update the amount to the new converted amount
    setAmount(newConvertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  const formatValue = (value) => {
    return numeral(value).format("0,0.00");
  }
  

  return (
    <div
      className="w-full h- flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
     
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="from"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                onAmountChange={(amount) => setAmount(amount)}
                selectedCurrency={from}
                formatValue={formatValue}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                Swap
              </button>
            </div>
            <div className="w-full mb-1">
              <InputBox
                label="to"
                currencyOptions={options}
                amount={convertedAmount}
                onCurrencyChange={(currency) => setTo(currency)}
                selectedCurrency={to}
                amountDisabled
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CurrencyConverter;
