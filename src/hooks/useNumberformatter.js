import React, { useEffect } from "react";

const useNumberFormatter = (numbersToFormat) => {
  //list of locales representing different countries
  const locale = ["de-DE"];

  useEffect(() => {
  //check if numbersToFormat is provided
  if (!numbersToFormat || numbersToFormat.length === 0){
    console.warn("Please provide valid numbersToFormat")
    return;
  }
      //create a formatter with the current locale
      const formatter = new Intl.NumberFormat(locale);
      //format and display each number for the current locale
      const formattedNumbers = numbersToFormat.map((number) =>
        formatter.format(number)
      );
      //display the formatted numbers with coments
      console.log(`Locale: ${locale}`);
      formattedNumbers.forEach((formattedNumber, index) => {
        console.log(`Number ${index + 1}: ${formattedNumber}`);
      });
  }, [numbersToFormat]); //run the effect whenEvter numbersToFormat change

  return{
    formattedNumbers: numbersToFormat.map((number) =>
    new Intl.NumberFormat(locale).format(number)
  ),
  }

};

export default useNumberFormatter;
