var ctx = document.getElementById('graph1').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

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
      title: {
        display: true,
        text: "Do Users Collaborate?"
      }
    }
});

var ctx = document.getElementById('graph2').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

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
      title: {
        display: true,
        text: "Who Users Collaborate With"
      }
    }
});

// var ctx = document.getElementById('graph3').getContext('2d');
// var chart = new Chart(ctx, {
//     // The type of chart we want to create
//     type: 'bar',
//
//     // The data for our dataset
//     data: {
//         labels: ["Access files", "Collaborate", "Security", "Backup Inform", "Extend Storage"],
//         datasets: [{
//             label: "Reason for Cloud Storage",
//             backgroundColor: 'rgb(255, 99, 132)',
//             borderColor: 'rgb(255, 99, 132)',
//             data: [95, 71, 9, 80, 35]
//         }]
//     },
//     options: {
//       title: {
//         display: true,
//         text: "Main Reason(s) for Cloud Storage"
//       }
//     }
// });
