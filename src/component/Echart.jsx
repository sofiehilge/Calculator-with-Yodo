import React from "react";
import ReactEcharts from "echarts-for-react";
import * as echarts from "echarts";

const Echart = ({ updatedInputValue }) => {

  /* Generate yearsArray for the xAxis */

  const generateYearsArray = () => {
    const currentYear = new Date().getFullYear();
    const numberofYears = 20;
    const yearsArray = Array.from({length: numberofYears}, (_, index) => currentYear + index);
    return yearsArray.map(String);
  }

  console.log("updatedInputValue: ", updatedInputValue)
  const option = {
    color: ["#80FFA5", "#00DDFF", "#37A2FF", "#FF0087", "#FFBF00"],
    title: {
      text: "Output expected",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#6a7985",
          formatter: function () {
            return `Your expected output in EUR`;
          },
        },
      },
    },
    legend: {
      data: ["Free Plan 2.5%", "Good Plan 4.5%"],
    },

    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      axisLabel: {
        formatter: "{value}",
        align: "center",
      },
      type: "category",
      boundaryGap: false,
      data: generateYearsArray(),
    },
    yAxis: {
      axisLabel: {
        formatter: "{value} Euro",
        align: "center",
      },
      type: "value",
    },
    series: [
      {
        name: "Free Plan 2.5%",
        type: "line",
        stack: "Total",
        smooth: true,
        lineStyle: {
          width: 0,
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgb(128, 255, 165)",
            },
            {
              offset: 1,
              color: "rgb(1, 191, 236)",
            },
          ]),
        },
        emphasis: {
          focus: "series",
        },
        data: generateYearsArray().map((year, index) => updatedInputValue * 0.025 * (index +1))
        /*  [updatedInputValue * 0.025, updatedInputValue * 0.025 * 3, updatedInputValue * 0.025 * 6, updatedInputValue * 0.025 * 9, updatedInputValue * 0.025 * 12, updatedInputValue * 0.025 * 15, updatedInputValue * 0.025 * 18], */
      },
      {
        name: "Good Plan 4.5%",
        type: "line",
        stack: "Total",
        smooth: true,
        lineStyle: {
          width: 0,
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgb(0, 221, 255)",
            },
            {
              offset: 1,
              color: "rgb(77, 119, 255)",
            },
          ]),
        },
        emphasis: {
          focus: "series",
        },
        data:generateYearsArray().map((year, index) => updatedInputValue * 0.045 * (index +1))
        /*  [updatedInputValue * 0.045, updatedInputValue * 0.045 * 3, updatedInputValue * 0.045 * 6, updatedInputValue * 0.045 * 9, updatedInputValue * 0.045 * 12, updatedInputValue * 0.045 * 15, updatedInputValue * 0.045 * 18], */
      },
    ],
  };

  return (
    <>
      <ReactEcharts
        option={option}
        style={{ height: "80vh", left: 50, top: 50, width: "90vw" }}
        opts={{ renderer: "svg" }}
      />
    </>
  );
};

export default Echart;
