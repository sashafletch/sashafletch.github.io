var ctx = document.getElementById('graph1').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'pie',

    // The data for our dataset
    data: {
        labels: ["Close Friends/Family", "Personal Trainers", "Someone with similar fitness goals", "Someone who has achieved my goals", "Other"],
        datasets: [{
            label: "Whose support would keepo you motivated the most?",
            backgroundColor: ["#FADE39", "#46bebc", "#E81D62", "#8AC249", "#9B26AF"],
            data: [18, 16, 47, 15, 4]
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
        text: "Whose support would keep you motivated the most?",
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
        labels: ["Log Workout", "Connect with others", "Easy to use", "Motivation", "Accountability", "Other"],
        datasets: [{
            label: "What features do you like most about your app?",
            backgroundColor: [ "#FADE39","#E81D62", "#46BEBC", "#8AC249", "#9B26AF"],
            data: [24, 4, 32, 17, 18, 6]
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
        text: "What features do you like most about your app?",
      },
    legend: {
      display: false,
    }
  }
});
