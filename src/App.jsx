import React, { useState } from "react";
/* import Form from "./component/form"; */
import Echart from "./component/Echart";
import FormHaris from "./component/FormHaris";
import OutputComp from "./component/OutputComp";
/* import DynEchart from "./component/DynEchart"; */


function App() {
  const [updatedInputValue, setUpdatedInputValue] = useState(0);
  const handleInputValue = (inputValue) => {
    setUpdatedInputValue(inputValue);
  };

  return (
    <div className="flex">
      <FormHaris handleInputValue={handleInputValue} />
      <OutputComp updatedInputValue={updatedInputValue}/>
      <Echart updatedInputValue={updatedInputValue} />
     
    </div>
  );
}

export default App;
