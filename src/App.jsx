import React, { useState } from "react";
/* import Form from "./component/form"; */
import Echart from "./component/Echart";
import FormHaris from "./component/FormHaris";
/* import DynEchart from "./component/DynEchart"; */

function App() {
  const [updatedInputValue, setUpdatedInputValue] = useState(0);
  const handleInputValue = (inputValue) => {
    setUpdatedInputValue(inputValue);
  };

  return (
    <>
    {/*   <Form  /> */}
      <Echart updatedInputValue={updatedInputValue} />
      <div>
        <FormHaris handleInputValue={handleInputValue}/>
      </div>
    </>
  );
}

export default App;
