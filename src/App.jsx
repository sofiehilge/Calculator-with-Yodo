import React, {useState} from "react";
import Form from "./component/form";
import Echart from "./component/Echart";

function App() {
 
  const [calculatedOutput, setCalculatedOutput] = useState(0);
const handleOutput = (output) => {
  setCalculatedOutput(output);
}

  return (
    <>
      <Form handleOutput={handleOutput}/>
      <Echart calculatedOutput={calculatedOutput} />
    </>
  );
}

export default App;
