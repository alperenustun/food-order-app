import React from "react";
import ReactApexChart from "react-apexcharts";

function ApexChart() {
  const series = [44, 55, 67, ""];
  const options = {
    chart: {
      height: 280,
      width: 280,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "30%",
        },

        track: {
          background: "#393c49",
          margin: 4,
        },
        dataLabels: {
          name: {
            fontSize: "22px",
          },
          value: {
            fontSize: "16px",
          },
          total: {
            show: true,
            label: "Total",
            color: "#fff",
            formatter: function () {
              return 149;
            },
          },
        },
      },
    },
    labels: ["Delivery", "To Go", "Dine In", ""],
    colors: ["#65B0F6", "#FFB572", "#FF7CA3", ""],
  };

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type="radialBar"
          height={280}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
}

export default ApexChart;
