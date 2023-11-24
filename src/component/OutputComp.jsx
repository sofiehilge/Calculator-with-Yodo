import React from "react";
import useNumberFormatter from "../hooks/useNumberformatter";

const OutputComp = ({ updatedInputValue, selectedPlan }) => {

  const {formattedNumbers} = useNumberFormatter([
    updatedInputValue * 0.025,
    updatedInputValue * 0.025 *3,
    updatedInputValue * 0.025 *6,
    updatedInputValue * 0.05,
    updatedInputValue * 0.05 *3,
    updatedInputValue * 0.05 *6,
  ])
  return (
    <div className="mb-4 text-center">
      {selectedPlan === 2.5 && (
        <div className="flex justify-between m-4">
          <p>In 1 year <span className="flex justify-center">{formattedNumbers[0]} €</span></p>
          <p>In 3 years <span className="flex justify-center">{formattedNumbers[1]} €</span></p>
          <p>In 6 years <span className="flex justify-center">{formattedNumbers[2]} €</span></p>
        </div>
      )}

      {selectedPlan === 5 && (
        <div className="flex justify-between m-4">
          <p>In 1 year <span className="flex justify-center">{formattedNumbers[3]} €</span></p>
          <p>In 3 years <span className="flex justify-center">{formattedNumbers[4]} €</span></p>
          <p>In 6 years <span className="flex justify-center">{formattedNumbers[5]} €</span></p>
        </div>
      )}
    </div>
  );
};

export default OutputComp;
