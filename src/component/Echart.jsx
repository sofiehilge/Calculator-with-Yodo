import React from "react";
import ReactEcharts from "echarts-for-react";
import * as echarts from "echarts";

const Echart = ({calculatedOutput}) => {
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
        formatter: "{value} years",
        align: "center",
      },
      type: "category",
      boundaryGap: false,
      data: ["1", "3", "6", "9", "12", "15", "18"],
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
        data: [25, 75, 150, 225, 300, 375, 450],
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
        data: [45, 135, 270, 405, 540, 675, 810],
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
