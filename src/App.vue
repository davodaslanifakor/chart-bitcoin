<template>
  <div>
    <filter-date-picker />
    <lineChart :chart-data="datacollection" v-if="datacollection" />
  </div>
</template>

<script>
import filterDatePicker from "./components/filter-date-picker";
import lineChart from "./components/charts/line-chart";
export default {
  name: "App",
  components: {
    filterDatePicker,
    lineChart,
  },
  data() {
    return {
      datacollection: null,
    };
  },
  mounted() {
    this.fillData();
  },
  methods: {
    async fillData() {
      let response = await this.axios.get(
        "/bpi/historical/close.json?start=2021-08-01&end=2021-08-10&index=[USD]"
      );
      let bpi = response.data.bpi;
      let labels = Object.keys(bpi);
      let datasets = Object.values(bpi);
      this.datacollection = {
        datasets: [
          {
            label: "Bitcoin",
            name: "Bitcoin",
            backgroundColor: "transparent",
            pointBackgroundColor: "#f7941e",
            pointBorderColor: "#f7941e",
            data: datasets,
            borderColor: [
              "rgba(247, 148, 30, 0.2)",
              "rgba(247, 148, 30, 0.4)",
              "rgba(247, 148, 30, 0.6)",
              "rgba(247, 148, 30, 0.8)",
              "rgba(247, 148, 30, 1)",
            ],
          },
        ],
        labels: labels,
      };
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
