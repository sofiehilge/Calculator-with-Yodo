import React from 'react'

function CurrencySelector({
    onCurrencyChange,
    currencyOptions = [],
    selectedCurrency = "eur",
    currencyDisabled = false,
    className= "", 
}) {
  return (
    <div className="w-1/2 flex flex-wrap justify-end text-right">
    <p className="text-black/40 mb-2 w-full">Currency Type</p>
    <select
      className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
      value={selectedCurrency}
      onChange={(e) => {
        onCurrencyChange && onCurrencyChange(e.target.value);
      }}
      disabled={currencyDisabled}
    >
      {currencyOptions.map((currency) => (
        <option key={currency} value={currency}>
          {currency}
        </option>
      ))}
    </select>
  </div>
  )
}

export default CurrencySelector