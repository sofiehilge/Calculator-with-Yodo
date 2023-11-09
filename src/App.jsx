import React, {useState} from "react";
import Form from "./component/form";
import Echart from "./component/Echart";
/* import DynEchart from "./component/DynEchart"; */

function App() {
 
  const [updatedInputValue, setUpdatedInputValue] = useState(0);
const handleInputValue = (inputValue) => {
  setUpdatedInputValue(inputValue);
}

  return (
    <>
      <Form handleInputValue={handleInputValue}/>
      <Echart updatedInputValue={updatedInputValue} />
     {/*  <DynEchart/> */}
    </>
  );
}

export default App;
