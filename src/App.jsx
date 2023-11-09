import React, { useState } from "react";
import Form from "./component/form";
import Echart from "./component/Echart";
import RangeSlider from "./component/RangeSlider";
import FormHaris from "./component/FormHaris";
/* import DynEchart from "./component/DynEchart"; */

function App() {
  const [updatedInputValue, setUpdatedInputValue] = useState(0);
  const handleInputValue = (inputValue) => {
    setUpdatedInputValue(inputValue);
  };

  return (
    <>
      <Form handleInputValue={handleInputValue} />
      <Echart updatedInputValue={updatedInputValue} />
      <div>
        <FormHaris />
      </div>
    </>
  );
}

export default App;
