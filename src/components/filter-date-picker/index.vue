<template>
  <div class="filter-date-picker">
    <label class="filter-date-picker__title">Filter :</label>
    <div class="filter-date-picker__from">
      <label class="filter-date-picker__lable">From:</label>
      <VueDatePicker v-model="from" />
    </div>
    <div class="filter-date-picker-to">
      <label class="filter-date-picker__lable">From:</label>
      <VueDatePicker v-model="to" />
    </div>
  </div>
</template>

<script>
export default {
  name: "filter-date-picker",
  data() {
    return {
      from: null,
      to: null,
    };
  },
};
</script>
<style lang="scss">
.filter-date-picker {
  display: flex;
  align-items: center;
}
.filter-date-picker label {
  margin-right: 10px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
.filter-date-picker .bold {
  font-weight: bold;
}
</style>