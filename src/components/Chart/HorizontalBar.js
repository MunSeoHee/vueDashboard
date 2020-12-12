import { HorizontalBar } from 'vue-chartjs'

export default {
  extends: HorizontalBar,
  type: 'horizontalBar',
  data: () => ({
    chartdata: {
        labels: [''],
        datasets: [{
            data: [18.5],
            backgroundColor: "rgba(63,103,126,1)",
        },{
            data: [4.5],
            backgroundColor: "rgba(163,103,126,1)",
        },{
            data: [2],
            backgroundColor: "rgba(63,203,26,1)",
        },{
            data: [5],
            backgroundColor: "rgba(63,23,226,1)",
        },{
            data: [5],
            backgroundColor: "rgba(64,203,226,1)",
        }]
    },
    options: {
      legend:{
        display: false,
        position: 'bottom'
      },
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [{
            stacked: true,
          display: true,
          gridLines: {
            display: false
          },
        }],
        yAxes: [{
            stacked: true,
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




