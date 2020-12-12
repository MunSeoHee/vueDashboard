import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  data: () => ({
    chartdata: {
        labels: ['Mon', 'Thu', 'Thr', 'Fri', 'Sat', 'Sun'],
        datasets: [
          {
            label: '걷기',
            backgroundColor: 'rgb(79,119,212)',
            data: [800, 900, 1000, 850, 820, 920, 700]
          },
          {
            label: '달리기',
            backgroundColor: 'rgb(125,150,196)',
            data: [100, 400, 300, 400, 500, 600, 700]
          }
        ],
    },
    options: {
      legend:{
        display: true,
        position: 'bottom'
      },
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [{
          display: true,
          gridLines: {
            display: false
          },
        }],
        yAxes: [{
          display: true,
          gridLines: {
            display: false
          },
        }]
      }
    }
  }),

  mounted () {
    
    this.renderChart(this.chartdata, this.options)
  }
}