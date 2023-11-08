import React from "react";
import Form from "./component/form";
import BarChart from "./component/BarChart";
import Axis from "./component/Axis";
import { useState } from "react";
import { UserData } from "./Data";
import LineChart from "./component/LineChart";
import Echart from "./component/Echart";

function App() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Lost",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  return (
    <>
      <Form />
      <BarChart chartData={userData} />
      <LineChart chartData={userData} />
      <Axis />
      <Echart />
    </>
  );
}

export default App;
