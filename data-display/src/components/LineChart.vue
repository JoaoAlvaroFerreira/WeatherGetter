<template>
  <div style="height:400px;">
  <Line :styles="myStyles"  :data="data" :options="options" />
  </div>
</template>

<script>
import { Line } from "./../../node_modules/vue-chartjs";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default {
  components: { Line },
  props: ["data", "options"],
  data() {
    return {
      myStyles: {
        height: '300px',
        width: '100%',
        position: 'relative',
      },
      chartOptions: {
        scales: {
          yAxis: [{
            ticks: {
              beginAtZero: true,
            },
            gridLines: {
              display: true,
            },
          }],
          xAxis: [{
            ticks: {
              beginAtZero: true,
            },
            gridLines: {
              display: false,
            },
          }],
        },
        legend: {
          display: true,
        },
        tooltips: {
          enabled: true,
          mode: 'single',
          callbacks: {
            label(tooltipItems, data) {
              const { datasetIndex, index } = tooltipItems;
              const value = data.datasets[datasetIndex].data[index];
              if (parseInt(value, 10) > 999) {
                return ` ${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
              }
              return ` ${value}`;
            },
          },
        },
        responsive: true,
        maintainAspectRatio: false,
        height: 300,
      },
    };
  },
};
</script>

<style lang="scss" scoped>

</style>