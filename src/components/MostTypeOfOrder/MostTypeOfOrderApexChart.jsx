import ApexCharts from "apexcharts";
function ApexChart() {
  const series = [44, 55, 67, 83];
  const options = {
    chart: {
      height: 350,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
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
            formatter: function (w) {
              return 249;
            },
          },
        },
      },
    },
    labels: ["", "#65B0F6", "#FFB572", "#FF7CA3"],
  };

  return (
    <div>
      <div id="chart">
        <ApexCharts
          options={options}
          series={series}
          type="radialBar"
          height={350}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
}

ReactDOM.render(<ApexChart />, document.getElementById("app"));

export default ApexChart;
