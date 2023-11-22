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
    background-color: #606778; /* color of the track */
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

  const handleInputClick = () => {
    setAmountValue("");
  };

  const formatAmount = (e) => {
    const inputValue = e.target.value;
    const numericValue = inputValue
      .replace(/[^\d,]/g, "")
      .replace(/(,)(?=\1)|[^0-9,]/g, "");
    const formattedValue = numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return formattedValue;
  };

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1-2">
        <label htmlFor={id} className="inline-block mb-2 text-black/40">
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
            const formattedValue = formatAmount(e);
            e.target.value = formattedValue; //update the displayed value

            // Attempt to convert the numeric value to a number
            const parsedValue = Number(formattedValue.replace(/,/g, ""));

            // Check if the conversion is successful
            if (!isNaN(parsedValue)) {
              // Update the state with the parsed numeric value
              onAmountChange && onAmountChange(parsedValue);
            } else {
              // If the conversion fails, set an empty string or the original value
              onAmountChange && onAmountChange(""); // Reset to empty string
            }
          }}
          onClick={handleInputClick} // Handle click event to reset the value
        />
      </div>
      <div className="flex flex-wrap justify-end w-1/2 text-right">
        <p className="w-full mb-2 text-black/40">Currency Type</p>
        <DropDownContainer>
          <DropDownHeader onClick={toggling}>{selectedCurrency}</DropDownHeader>
          {isOpen && (
            <DropDownListContainer>
              <DropDownList
                className="px-1 py-1 bg-gray-100 rounded-lg outline-none cursor-pointer"
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
