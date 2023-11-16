import React from "react";
import ReactEcharts from "echarts-for-react";
import * as echarts from "echarts";

const Echart = ({ updatedInputValue }) => {
  const generateYearsArray = () => {
    const currentYear = new Date().getFullYear();
    const numberofYears = 20;
    const yearsArray = Array.from(
      { length: numberofYears },
      (_, index) => currentYear + index
    );
    return yearsArray.map(String);
  };

  const option = {
    color: ["#3183CC", "#194266"],
    title: {
      show: true,
      text: "PROJECTED\nBALANCE",
    },
    textStyle: {
      fontFamily: "Montserrat, sans-serif",
      color: "#000",
      /* overflow: "break",
      width: 50 */
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        label: {
          backgroundColor: "#000",
          fontFamily: "Inter, sans-serif",
          color: "#000",
          fontWeight: "medium",
          align: "center",
          lineHeight: "1.25",
          formatter: function () {
            return `Your expected output in EUR`;
          },
        },
      },
    },
    /* legend: {
      data: ["Free Plan 2.5%", "Good Plan 5%"],

      textStyle: {
        fontFamily: "Inter, sans-serif",
        color: "#000",
        fontWeight: "medium",
        textAlign: "center",
        align: "center",
      },
      selectedMode: false,
      icon: "circle",
      itemWidth: 10,
      itemHeight: 10,

      borderColor: "#606778",
      borderWidth: 1,
      borderRadius: 12,
      right: 10,
      top: 0,
      orient: "vertical",
      itemStyle: {
        width: 3,
        height: 3,
      },
    }, */

    grid: {
      left: "-10%",
      right: "0%",
      bottom: "0%",
      containLabel: true,
    },
    xAxis: {
      axisLabel: {
        formatter: "{value}",
        align: "left",
        fontFamily: "Inter, sans-serif",
        color: "#000",
        fontWeight: "medium",
        lineHeight: "10",
      },

      axisTick: {
        show: false,
      },

      type: "category",
      boundaryGap: false,
      data: generateYearsArray(),
    },
    yAxis: {
      // axisLabel: {
      //   formatter: "€{value}",
      //   align: "center",
      //   fontFamily: "Inter, sans-serif",
      //   color: "#000",
      //   fontWeight: "medium",
      //   lineHeight: "1.25",
      // },
      type: "value",
      show: false,
      splitLine: {
        show: false,
      },
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
      },
      {
        name: "Good Plan 5%",
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
          (year, index) => updatedInputValue * 0.05 * (index + 1)
        ),
      },
    ],
  };

  return (
    <div className="flex-col text-black">
      <ReactEcharts
        option={option}
        style={{ height: "160px", width: "full" }}
        opts={{ renderer: "svg" }}
      />
    </div>
  );
};

export default Echart;
