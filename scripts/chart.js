var ctx = document.getElementById('graph1').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'pie',

    // The data for our dataset
    data: {
        labels: ["Yes", "No", "Not sure"],
        datasets: [{
            label: "Do Users Collaborate?",
            backgroundColor: ["#FADE39", "#46bebc", "#E81D62"],
            data: [88, 12, 0]
        }]
    },
    options: {
      tooltips: {enabled: false},
      responsive: true,
      title: {
        display: false,
        text: "Do Users Collaborate?",
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
    type: 'pie',

    // The data for our dataset
    data: {
        labels: ["Friends", "Family", "Work Colleagues", "Clasmates", "Students"],
        datasets: [{
            label: "Who users collaborate with",
            backgroundColor: [ "#FADE39","#E81D62", "#46BEBC", "#8AC249", "#9B26AF"],
            data: [5, 5, 71, 14, 5]
        }]
    },
    options: {
      tooltips: {enabled: false},
      responsive: true,
      title: {
        display: false,
        text: "Who Users Collaborate With",
      },
    legend: {
      display: false,
    }
  }
});

document.getElementById('js-legend2').innerHTML = chart.generateLegend();
