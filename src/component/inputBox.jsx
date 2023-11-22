import React, { useId, useState } from "react";

import useNumberFormatter from "../hooks/useNumberformatter.js";

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

  const handleInputClick = () => {
    setAmountValue("");
  };

  const formatAmount = (e) => {
    const inputValue = e.target.value
    const numericValue = inputValue
      .replace(/[^\d,]/g, "")
      .replace(/(,)(?=\1)|[^0-9,]/g, "");
    const formattedValue = numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return formattedValue;
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
            const formattedValue = formatAmount(e);
            e.target.value = formattedValue//update the displayed value
          
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
