import React from "react";
import ReactEcharts from "echarts-for-react";
import * as echarts from "echarts";

const Echart = ({ updatedInputValue }) => {
  /* Generate yearsArray for the xAxis */

  const generateYearsArray = () => {
    const currentYear = new Date().getFullYear();
    const numberofYears = 20;
    const yearsArray = Array.from(
      { length: numberofYears },
      (_, index) => currentYear + index
    );
    return yearsArray.map(String);
  };

  console.log("updatedInputValue: ", updatedInputValue);
  const option = {
    color:['#3183CC','#194266'],
    title: {
      text: "Output expected",
    },
    textStyle: {
      fontFamily: "Montserrat, sans-serif",
      color: "#121316",
      fontWeight: "medium",
      lineHeight: "1.25",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // type: "cross",
        label: {
          backgroundColor: "#abb8c3",
          fontFamily: "Inter, sans-serif",
          color: "#606778",
          fontWeight: "medium",
          lineHeight: "1.25",
          formatter: function () {
            return `Your expected output in EUR`;
          },
        },
      },
    },
    legend: {
      data: ["Good Plan 4.5%", "Free Plan 2.5%"],
      textStyle: {
        fontFamily: "Inter, sans-serif",
        color: "#606778",
        fontWeight: "medium",
        lineHeight: "1.25",
      }
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
        fontFamily: "Inter, sans-serif",
        color: "#606778",
        fontWeight: "medium",
        lineHeight: "1.25",
      },
      type: "category",
      boundaryGap: false,
      data: generateYearsArray(),
    },
    yAxis: {
      axisLabel: {
        formatter: "{value} Euro",
        align: "center",
        fontFamily: "Inter, sans-serif",
        color: "#606778",
        fontWeight: "medium",
        lineHeight: "1.25",
      },
      type: "value",
    },
    series: [
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
          color: new echarts.graphic.LinearGradient(140, 0, 140, 1, [
            {
              offset: 0.3202,
              color: "#194266",
            },
            {
              offset: 0.8349,
              color: "#3c5975",
            },
            {
              offset: 0.9627,
              color: "#516579",
            },
          ]),
        },
        emphasis: {
          focus: "series",
        },
        data: generateYearsArray().map(
          (year, index) => updatedInputValue * 0.045 * (index + 1)
        ),
        /*  [updatedInputValue * 0.045, updatedInputValue * 0.045 * 3, updatedInputValue * 0.045 * 6, updatedInputValue * 0.045 * 9, updatedInputValue * 0.045 * 12, updatedInputValue * 0.045 * 15, updatedInputValue * 0.045 * 18], */
      },
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
          //the colors are from the wordpress page
          color: new echarts.graphic.LinearGradient(140, 0, 140, 1, [
            {
              offset: 0.3202,
              color: "#3183CC",
            },
            {
              offset: 0.8349,
              color: "#77B2E9",
            },
            {
              offset: 0.9627,
              color: "#A2CAF2",
            },
          ]),
        },
        emphasis: {
          focus: "series",
        },
        data: generateYearsArray().map(
          (year, index) => updatedInputValue * 0.025 * (index + 1)
        ),
        /*  [updatedInputValue * 0.025, updatedInputValue * 0.025 * 3, updatedInputValue * 0.025 * 6, updatedInputValue * 0.025 * 9, updatedInputValue * 0.025 * 12, updatedInputValue * 0.025 * 15, updatedInputValue * 0.025 * 18], */
      },
    ],
  };

  return (
    <>
      <ReactEcharts
        option={option}
        style={{ height: "50vh", left: 50, top: 50, width: "50vw" }}
        opts={{ renderer: "svg" }}
      />
    </>
  );
};

export default Echart;
