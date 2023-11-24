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
          <p>In 1 year {formattedNumbers[0]} €</p>
          <p>In 3 years {formattedNumbers[1]} €</p>
          <p>In 6 years {formattedNumbers[2]} €</p>
        </div>
      )}

      {selectedPlan === 5 && (
        <div className="flex justify-between m-4">
          <p>In 1 year {formattedNumbers[3]} €</p>
          <p>In 3 years {formattedNumbers[4]} €</p>
          <p>In 6 years {formattedNumbers[5]} €</p>
        </div>
      )}
    </div>
  );
};

export default OutputComp;
