import Vue from "vue";
import './plugins/axios'
import App from "./App.vue";

Vue.config.productionTip = false;
import VueDatePicker from "@mathieustan/vue-datepicker";
import "@mathieustan/vue-datepicker/dist/vue-datepicker.min.css";

Vue.use(VueDatePicker);

Vue.use(VueDatePicker, {
  lang: "en",
});
new Vue({
  render: (h) => h(App),
}).$mount("#app");
