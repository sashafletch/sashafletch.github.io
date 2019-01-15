var ctx = document.getElementById('graph1').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'pie',

    // The data for our dataset
    data: {
        labels: ["Daily Visits", "Weekly Visits", "Monthly Visits", "A Few Per Year"],
        datasets: [{
            label: "How active are you on Goodreads?",
            backgroundColor: ["#FADE39", "#46bebc", "#E81D62", "#8AC249"],
            data: [0, 12.5, 25, 62.5]
        }]
    },
    options: {
      tooltips: {
        titleFontSize: 28,
        bodyFontSize: 28,
        callbacks: {
          title: function(tooltipItems, data) {
          return '';
        },
          label: function(tooltipItem, data) {
            var datasetLabel = '';
            var label = data.labels[tooltipItem.index];
            return data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index]+'%';
          }
        }
      },
      responsive: true,
      title: {
        display: false,
        text: "How active are you on Goodreads?",
      },
      legend: {
        display: false,
      }
    }
});

document.getElementById('js-legend').innerHTML = chart.generateLegend();

var ctx = document.getElementById('graph2').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ["Browse books", "View recommended books", "View book's rating", "Add rating", "Add book to shelf", "Browse book lists"],
        datasets: [{
            label: "What activities are you involved in the most on Goodreads?",
            backgroundColor: [ "#FADE39","#E81D62", "#46BEBC", "#8AC249", "#9B26AF", "#FFA500"],
            data: [75, 75, 75, 25, 12.5, 25]
        }]
    },
    options: {
      tooltips: {
        titleFontSize: 28,
        bodyFontSize: 28,
        callbacks: {
          title: function(tooltipItems, data) {
          return '';
        },
          label: function(tooltipItem, data) {
            var datasetLabel = '';
            var label = data.labels[tooltipItem.index];
            return data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index]+'%';
          }
        }
      },
      responsive: true,
      title: {
        display: false,
        text: "What activities are you involved in the most on Goodreads??",
      },
    legend: {
      display: false,
    }
  }
});
