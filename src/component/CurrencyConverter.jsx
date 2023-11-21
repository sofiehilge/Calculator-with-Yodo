import React, { useState } from "react";
import useCurrencyInfo from "../hooks/useCurrencyInfo.js";
import useNumberFormatter from "../hooks/useNumberformatter.js";
import InputBox from "./inputBox.jsx";

function CurrencyConverter() {
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("eur");
  const [to, setTo] = useState("dkk");
  const [convertedAmount, setConvertedAmount] = useState("");

  const { data: currencyInfo, error } = useCurrencyInfo(from); //calling the custom hook
  const options = Object.keys(currencyInfo);

//use hook number formatter
const {formattedNumbers} = useNumberFormatter([convertedAmount])//use the hook

  const swap = () => {
    //swap from and to
    const newFrom = to;
    const newTo = from;
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

  return (
    <div className="flex flex-wrap items-center justify-center w-full bg-no-repeat bg-cover h-">
      <div className="w-full">
        <div className="w-full max-w-md p-5 mx-auto border border-black rounded-lg backdrop-blur-sm">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-2">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                onAmountChange={(amount) => setAmount(amount)}
                selectedCurrency={from}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md bg-black text-white px-2 py-0.5"
                onClick={swap}
              >
                Swap
              </button>
            </div>
            <div className="w-full mb-1">
              <InputBox
                label="To"
                currencyOptions={options}
                amount={formattedNumbers}
                onCurrencyChange={(currency) => setTo(currency)}
                selectedCurrency={to}
                amountDisabled
              />
            </div>
            <button
              type="submit"
              className="w-full text-white bg-black rounded-lg"
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
