import React from "react";

const OutputComp = ({ updatedInputValue }) => {
  return (
    <div className="text-center">
      <div className="mb-4 text-blue-600">
        <p>
          Output after 1 year with the Free Plan {updatedInputValue * 0.025}€
        </p>
        <p>
          Output after 3 years with the Free Plan{" "}
          {updatedInputValue * 0.025 * 3}€
        </p>
        <p>
          Output after 6 years with the Free Plan{" "}
          {updatedInputValue * 0.025 * 6}€
        </p>
      </div>
      <div className="text-blue-900">
        <p>
          Output after 1 year with the Good Plan {updatedInputValue * 0.045}€
        </p>
        <p>
          Output after 3 years with the Good Plan{" "}
          {updatedInputValue * 0.045 * 3}€
        </p>
        <p>
          Output after 6 years with the Good Plan{" "}
          {updatedInputValue * 0.045 * 6}€
        </p>
      </div>
    </div>
  );
};

export default OutputComp;
