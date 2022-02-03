<template>
  <div id="app">
    <FilterChart @filterData="getData" />
    <lineChart :chart-data="datacollection" v-if="datacollection" />
  </div>
</template>

<script>
import FilterChart from "./components/filter/index.vue";
import lineChart from "./components/charts/line-chart";
import { objectToQueryString } from "./helper/utils";
export default {
  name: "App",
  components: {
    FilterChart,
    lineChart,
  },
  data() {
    return {
      datacollection: null,
    };
  },
  methods: {
    /**
     * @param start {Date} - by format YYYY-MM-DD
     * @param end {Date} - by format YYYY-MM-DD
     * @return {Void}
     */
    async getData({ start, end }) {
      let queryData = { index: "[USD]", start: start, end: end };
      let response = await this.axios.get(
        `/bpi/historical/close.json?${objectToQueryString(queryData)}`
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
            lineTension: 0,
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
:root {
  --light: #fff;
  --primary: #4f88ff;
  --inverse: #eee;
}
#app {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 14px;
}
</style>
