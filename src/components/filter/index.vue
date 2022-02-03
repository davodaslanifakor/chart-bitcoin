<template>
  <div class="filter">
    <label class="filter__title">Filter :</label>
    <div class="filter__start">
      <label class="filter__label">Start:</label>
      <VueDatePicker
        :max-date="today"
        v-model="start"
        placeholder="please select start date"
      />
    </div>
    <div class="filter__end">
      <label class="filter__label">End:</label>
      <VueDatePicker
        :max-date="today"
        :min-date="start"
        v-model="end"
        placeholder="please select end date"
      />
    </div>
    <div class="filter__action">
      <button ref="btnFilter" class="filter__button" @click="filterData">
        Rnedr
      </button>
    </div>
  </div>
</template>

<script>
import { getBaseStartDate, getToday } from "../../helper/utils";

export default {
  name: "FilterChart",
  data() {
    return {
      today: getToday(),
      start: getBaseStartDate(),
      end: getToday(),
    };
  },
  mounted() {
    this.filterData();
  },
  methods: {
    filterData() {
      this.$emit("filterData", { start: this.start, end: this.end });
    },
  },
};
</script>
<style lang="scss">
.filter {
  display: flex;
  align-items: center;
  margin-bottom: 3em;
  border-bottom: 0.0625em solid var(--inverse);
  padding-bottom: 0.75em;
  &__title {
    font-weight: bold;
    align-self: flex-start;
    margin-right: 26px;
  }
  &__lable {
    margin-right: 10px;
  }
  &__button {
    border: none;
    border-radius: 0.25em;
    padding: 0.75em 0.875em;
    font-weight: 400;
    background-color: var(--primary);
    color: var(--light);
  }
}
</style>