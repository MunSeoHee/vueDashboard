
export const basicOptions = {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    responsive: true,
    annotation: {
      annotations: [{
        type: 'line',
        mode: 'horizontal',
        scaleID: 'y-axis-0',
        value: 5,
        borderColor: 'rgb(75, 192, 192)',
        borderWidth: 4,
        label: {
          enabled: false,
          content: 'Test label'
        }
      }]
    },
    // !!!!!!!옵션 추가
  };
  
  export let purpleChartOptions = {
    ...basicOptions,
    tooltips: {
      borderColor: '#409EFF',
      backgroundColor: '#ffffff',
      titleFontColor: '#333',
      bodyFontColor: '#666',
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest"
    },
    scales: {
      yAxes: [{
        barPercentage: 1.6,
        gridLines: {
          drawBorder: false,
          color: 'rgba(29,140,248,0.0)',
          zeroLineColor: "transparent",
        },
        ticks: {
          suggestedMin: 100,
          suggestedMax: 5,
          padding: 20,
          fontColor: "#9a9a9a"
        }
      }],
  
      xAxes: [{
        barPercentage: 1.6,
        gridLines: {
          drawBorder: false,
          color: 'rgba(225,78,202,0.1)',
          zeroLineColor: "transparent",
        },
        ticks: {
          padding: 20,
          fontColor: "#9a9a9a"
        }
      }]
    }
  }
  
