import React from "react";
import ReactApexChart from "react-apexcharts";
import { data } from "./Helper";

const Chart = () => {
  const obj = {
    series: [
      {
        name: "",
        data: [],
      },
      {
        name: "peoples",
        data: data,
      },
    ],
    options: {
      chart: {
        toolbar: {
          show: false,
        },

        height: 350,
        type: "scatter",
      },

      xaxis: {
        title: {
          text: "Minutes to eat breakfast ",
        },

        tickAmount: 12,
      },

      yaxis: {
        labels: {
          show: false,
          align: "right",
          minWidth: 0,
          maxWidth: 160,
          style: {
            colors: [],
            fontSize: "12px",
            fontFamily: "Helvetica, Arial, sans-serif",
            fontWeight: 400,
            cssClass: "apexcharts-yaxis-label",
          },
          offsetX: 0,
          offsetY: 0,
          rotate: 0,
        },

        title: {
          text: "people",
        },
      },
      grid: {
        show: false,
      },
    },
  };

  React.useEffect(() => {
    const element = document.getElementsByClassName("apexcharts-legend-series");
    for (let i = 0; i < element.length; i++) {
      element[i].style.visibility = "hidden";
    }
  }, []);

  return (
    <div
      id='chart'
      style={{ marginTop: "7px", padding: "10px", background: "aliceblue" }}
    >
      <ReactApexChart
        options={obj.options}
        series={obj.series}
        type='scatter'
        height={350}
      />
    </div>
  );
};
export default Chart;
