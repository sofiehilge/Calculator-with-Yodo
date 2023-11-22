import React, { useId, useState } from "react";
import styled from "styled-components";

const DropDownContainer = styled("div")`
  width: 1rem;
  margin: 0 auto;
`;
const DropDownHeader = styled("div")`
  padding: 0.1em 1.5em 0.1em 1.5em;
  /* border: 2px solid red; */
  border-radius: 9999px;
  font-weight: 500;
  color: white;
  background: black;
  font-size: 12px;
  display: flex;
  justify-content: center;
  margin-top: auto;
  margin-bottom: auto;
  text-align: center;
`;

const DropDownListContainer = styled("div")`
  background-color: black;
`;

const DropDownList = styled("ul")`
  position: absolute;
  margin: 0;
  width: auto;
  padding-right: 4px;
  /* border: 2px solid red; */
  border-radius: 9999px;
  font-weight: 500;
  color: white;
  box-sizing: border-box;
  font-size: 12px;
  z-index: 2;
  box-sizing: border-box;
  max-height: 100px; /* Set a maximum height for the dropdown */
  overflow-y: auto; /* Add a scrollbar for overflow content */
  &::-webkit-scrollbar {
    width: 4px;
   
  }

  &::-webkit-scrollbar-thumb {
    background-color: #121316; /* color of the thumb */
    border-radius: 4px;
  
  }

  &::-webkit-scrollbar-track {
    background-color:#606778; /* color of the track */
    border-radius: 4px;
    height: 90px;
  }

  &:first-child {
    padding-top: 0.8em;
    background-color: black;
  }
`;
const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
`;

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "eur",
  amountDisabled = false,
  currencyDisabled = false,
  className = "",
}) {
  const id = useId();
  const [amountValue, setAmountValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };

  const isEuropeanCurrency = (currency) => {
    const europeanCurrencies = [
      "eur", // Euro
      "gbp", // British Pound
      "chf", // Swiss Franc
      // "sek", // Swedish Krona
      // "nok", // Norwegian Krone
      "dkk", // Danish Krone
      // "pln", // Polish Złoty
      // "czk", // Czech Koruna
      // "huf", // Hungarian Forint
      // "ron", // Romanian Leu
      // "bgn", // Bulgarian Lev
      // "hrk", // Croatian Kuna
      // "try", // Turkish Lira
      // "isk", // Icelandic Króna
    ];
    return europeanCurrencies.includes(currency.toLowerCase());
  };

  const isCryptoCurrency = (currency) => {
    const cryptoCurrencies = [
      "btc", // Bitcoin
      "eth", // Ethereum
      // "ltc", // Litecoin
      // "xrp", // Ripple
      // "bch", // Bitcoin Cash
      // "ada", // Cardano
      // "xlm", // Stellar
      // "dot", // Polkadot
      // "link", // Chainlink
      // "bnb", // Binance Coin
    ];
    return cryptoCurrencies.includes(currency.toLowerCase());
  };

  const handleKeyDown = (e) => {
    //Allow only numeric and specific control keys
    const isAllowedKey =
      e.key === "," || // Allow comma
      e.key === "." || // Allow dot
      (e.key >= "0" && e.key <= "9") ||
      e.key === "Backspace" ||
      e.key === "Delete" ||
      e.key === "ArrowLeft" ||
      e.key === "ArrowRight" ||
      e.key === "Home" ||
      e.key === "End";
    if (!isAllowedKey) {
      e.preventDefault();
    }
  };

  const handleInputClick = () => {
    setAmountValue("");
  };

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1-2">
        <label htmlFor={id} className="text-black/40 mb-2 inline-block">
          {label}
        </label>
        <input
          id={id}
          type="text"
          className="outline-none w-full bg-transparent py-1.5"
          placeholder="Amount"
          disabled={amountDisabled}
          value={amount}
          onChange={(e) => {
            // Allow only numbers, commas, and dots
            const numericValue = e.target.value.replace(/[^0-9,.]/g, "");

            // Attempt to convert the numeric value to a number
            const parsedValue = Number(numericValue);

            // Check if the conversion is successful
            if (!isNaN(parsedValue)) {
              // Update the state with the parsed numeric value
              onAmountChange && onAmountChange(parsedValue);
            } else {
              // If the conversion fails, set an empty string or the original value
              setAmountValue(e.target.value);
            }
          }}
          onClick={handleInputClick} // Handle click event to reset the value
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <DropDownContainer>
          <DropDownHeader onClick={toggling}>{selectedCurrency}</DropDownHeader>
          {isOpen && (
            <DropDownListContainer>
              <DropDownList
                className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                value={selectedCurrency}
                onChange={(e) => {
                  onCurrencyChange && onCurrencyChange(e.target.value);
                }}
                disabled={currencyDisabled}
              >
                {currencyOptions
                  .filter(
                    (currency) =>
                      isEuropeanCurrency(currency) || isCryptoCurrency(currency)
                  )
                  .map((currency) => (
                    <ListItem
                      onClick={onOptionClicked(currency)}
                      key={currency}
                      value={currency}
                    >
                      {currency}
                    </ListItem>
                  ))}
              </DropDownList>
            </DropDownListContainer>
          )}
        </DropDownContainer>
      </div>
    </div>
  );
}

export default InputBox;
