var ctx = document.getElementById('chart2').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
        datasets: [{
            label: 'Dataset 2',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 455, 2, 20, 305, 2, 20, 305, 2, 20, 30]
        }]
    },

    // Configuration options go here
    options: {}
});