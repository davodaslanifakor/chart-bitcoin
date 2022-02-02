import { Line, mixins } from "vue-chartjs";
const { reactiveProp } = mixins;

let optionsChart = {
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    display: true,
  },
};
export default {
  extends: Line,
  mixins: [reactiveProp],

  mounted() {
    // this.chartData is created in the mixin.
    // If you want to pass options please create a local options object
    this.renderChart(this.chartData, optionsChart);
  },
};
