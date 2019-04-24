/**
 * @author Jafar Amini
 */
export default {
  label: '',
  labels: [],
  data: [],
  colors: null,
  chartType: null,
  legend: true,
  options: {
    scaleShowVerticalLines: false,
    responsive: true,
    legend: {
      labels: {
        fontColor: 'black',
        fontFamily: null
        // fontFamily: 'IRANSans-web'
      },
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
};
