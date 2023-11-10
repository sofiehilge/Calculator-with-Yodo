import React from "react";

const OutputComp = ({ updatedInputValue }) => {
  return (
    <div>
      <div>
        <p>
          Output after 1 year with the Free Plan {updatedInputValue * 0.025} EUR
        </p>
        <p>
          Output after 3 year with the Free Plan {updatedInputValue * 0.025 * 3}{" "}
          EUR
        </p>
        <p>
          Output after 6 year with the Free Plan {updatedInputValue * 0.025 * 6}{" "}
          EUR
        </p>
      </div>
      <div>
        <p>
          Output after 1 year with the Good Plan {updatedInputValue * 0.045} EUR
        </p>
        <p>
          Output after 3 year with the Good Plan {updatedInputValue * 0.045 * 3}{" "}
          EUR
        </p>
        <p>
          Output after 6 year with the Good Plan {updatedInputValue * 0.045 * 6}{" "}
          EUR
        </p>
      </div>
    </div>
  );
};

export default OutputComp;
