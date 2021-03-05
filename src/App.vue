<template>
  <div class="App">
    <h1>react-google-flight-datepicker</h1>
    <h2>Install</h2>
    <pre>
        npm install react-google-flight-datepicker
        <br />
        <br />
        yarn add react-google-flight-datepicker
      </pre>
    <h2>RangeDatePicker</h2>
    <RangeDatePicker :startDate="new Date(2020, 0, 15)" :endDate="new Date(2020, 1, 1)" />
    <br />
    <h2>SingleDatePicker</h2>
    <SingleDatePicker :startDate="new Date(2020, 0, 15)" />
    <h2>RangeDatePicker with startDate and endDate</h2>
    <RangeDatePicker :startDate="new Date(2020, 0, 1)" :endDate="new Date(2020, 1, 1)" />
    <br />
    <h2>RangeDatePicker with minDate and maxDate</h2>
    <RangeDatePicker
      :startDate="new Date(2020, 0, 15)"
      :endDate="new Date(2020, 1, 8)"
      :minDate="new Date(2020, 0, 1)"
      :maxDate="new Date(2020, 1, 5)"
    />
    <br />
    <h2>RangeDatePicker with custom date format</h2>
    <RangeDatePicker :startDate="new Date(2020, 0, 15)" :endDate="new Date(2020, 1, 1)" dateFormat="D" />
    <h2>RangeDatePicker with custom month format</h2>
    <RangeDatePicker :startDate="new Date(2020, 0, 15)" :endDate="new Date(2020, 1, 1)" monthFormat="MMMM" />
    <br />

    <h2>Disabled RangeDatePicker</h2>
    <RangeDatePicker :startDate="new Date(2020, 0, 15)" :endDate="new Date(2020, 1, 1)" disabled />
    <br />

    <h2>Custom placeholder</h2>
    <RangeDatePicker
      :startDate="new Date(2020, 0, 15)"
      :endDate="new Date(2020, 1, 1)"
      startDatePlaceholder="From"
      endDatePlaceholder="To"
    />
    <br />

    <h2>Highlight today</h2>
    <RangeDatePicker
      :startDate="new Date(2020, 0, 15)"
      :endDate="new Date(2020, 1, 1)"
      startDatePlaceholder="From"
      endDatePlaceholder="To"
      highlightToday
    />
    <br />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {},
  methods: {
    onFocus(e: unknown) {
      console.warn('onFocus', e);
    }
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&display=swap');

html {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
  font-family: 'Montserrat', sans-serif;
}

* {
  font-family: 'Roboto', sans-serif;
  outline: none;
}
</style>
