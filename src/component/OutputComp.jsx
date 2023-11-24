import React from "react";

const OutputComp = ({ updatedInputValue, selectedPlan }) => {
  /* const formatValue = (value) => {
    return numeral(value).format("0.0");
  };  */

  return (
    <div className="mb-4 text-center">
      {selectedPlan === 2.5 && (
        <div className="flex justify-between m-4">
          <p>In 1 year {updatedInputValue * 0.025} €</p>
          <p>In 3 years {updatedInputValue * 0.025 * 3} €</p>
          <p>In 6 years {updatedInputValue * 0.025 * 6} €</p>
        </div>
      )}

      {selectedPlan === 5 && (
        <div className="flex justify-between m-4">
          <p>In 1 year {updatedInputValue * 0.05} €</p>
          <p>In 3 years {updatedInputValue * 0.05 * 3} €</p>
          <p>In 6 years {updatedInputValue * 0.05 * 6} €</p>
        </div>
      )}
    </div>
  );
};

export default OutputComp;
