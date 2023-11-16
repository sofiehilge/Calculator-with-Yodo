import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);

  //list of
  const europeanCurrencies = [
    "eur", "dkk", "nok", "sek", "chf", "czk", "huf", "pln", "gbp",
  ];
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((res) => {
        //chech if the code exists in the response
        if (res.hasOwnProperty(currency)) {
          setData(res[currency]);
        } else {
          setError(`Currency code ${currency} not foun in the API response`);
        }
      })
      .catch((err) => setError(err.message));
  }, [currency]);

  if (error) {
    console.error("Error fetching currency data:", error);
  }
  console.log(data);
  return { data, error };
}
export default useCurrencyInfo;