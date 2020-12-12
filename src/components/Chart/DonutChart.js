import { Doughnut } from 'vue-chartjs'

export default {
  extends: Doughnut,
  props: {
    labels: {
      type: Array,
      default: () => ['A', 'B', 'c']
    },
    data:{
      type: Array,
      default: () => [40, 20, 80]
    }
  },
  data: () => ({
    options: {
      responsive: false,
      legend:{
        display: true,
        position: 'bottom',
        fullWidth: true,
        
      },
    }
  }),
  mounted () {
    this.renderChart({
      labels: this.labels,
      datasets: [
        {
          backgroundColor: [
            '#409EFF',
            '#79BBFF',
            '#C6E2FF',
            '#DD1B16'
          ],
          data: this.data
        }
      ],
    }, this.options, {responsive: true, maintainAspectRatio: false})
  }
}







