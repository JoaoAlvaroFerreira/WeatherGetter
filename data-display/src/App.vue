<template>
  <div class="hello">
    <h1>Weather Data:</h1>
    <input type="text" v-model="searchTerm" placeholder="Location" />

    <VueDatePicker v-model="start_date"></VueDatePicker>
    <VueDatePicker v-model="end_date"></VueDatePicker>
    <button @click="fetchData">Get Temperature</button>

    <LineChart v-if="loaded" :data="chartData" />
  </div>
</template>
<script>
import LineChart from './components/LineChart.vue'
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

const prod_api_url = 'https://weathergetter.onrender.com/api/weather'
const dev_api_url = 'http://localhost:3000/api/weather'

export default {
  data: () => ({
    loaded: false,
    chartData: null,
    location: '',
    start_date: '01/02/2024',
    end_date: '10/03/2024',
    searchCountries: []
  }),
  components: {
    LineChart, VueDatePicker
  },
  methods: {
    async fetchData() {
      this.loaded = false
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
          {
            location: this.searchTerm,
            start_date: this.start_date,
            end_date: this.end_date
          })
      };
      fetch(prod_api_url, requestOptions)
        .then(response => response.json().then((data) => {
          this.chartData = data;
          this.loaded = true;
        }))
        .catch((err) => {
          console.error(err);
        });
    }

  },
};
</script>

<style>
button {
  padding: 12px 32px;
  font-size: 16px;
  border-radius: 8px;
}
</style>