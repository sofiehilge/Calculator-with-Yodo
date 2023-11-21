import React, { useId, useState } from "react";
import styled from "styled-components";

const DropDownContainer = styled("div")`
  width: 10.5em;
  margin: 0 auto;
`;
const DropDownHeader = styled("div")`
  margin-bottom: 0.8em;
  padding: 0.4em 2em 0.4em 1em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 1.3rem;
  color: #3faffa;
  background: #ffffff;
`;
const DropDownListContainer = styled("div")``;
const DropDownList = styled("ul")`
  position: absolute;
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #3faffa;
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
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
      "sek", // Swedish Krona
      "nok", // Norwegian Krone
      "dkk", // Danish Krone
      "pln", // Polish Złoty
      "czk", // Czech Koruna
      "huf", // Hungarian Forint
      "ron", // Romanian Leu
      "bgn", // Bulgarian Lev
      "hrk", // Croatian Kuna
      "try", // Turkish Lira
      "isk", // Icelandic Króna
    ];
    return europeanCurrencies.includes(currency.toLowerCase());
  };

  const isCryptoCurrency = (currency) => {
    const cryptoCurrencies = [
      "btc", // Bitcoin
      "eth", // Ethereum
      "ltc", // Litecoin
      "xrp", // Ripple
      "bch", // Bitcoin Cash
      "ada", // Cardano
      "xlm", // Stellar
      "dot", // Polkadot
      "link", // Chainlink
      "bnb", // Binance Coin
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

        {/* old selector */}
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
