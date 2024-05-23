const ctx = document.getElementById('stockChart').getContext('2d');
const ctx2 = document.getElementById('stockChart2').getContext('2d');
const ctx3 = document.getElementById('stockChart3').getContext('2d');
      
const data = {
    labels: ['Jan 17', 'Jan 25', 'Feb 1', 'Feb 7', 'Feb 15'],
    datasets: [{
    label: 'Value',
    data: [1200, 1300, 1324.99, 1250, 1350],
    fill: true,
    borderColor: '#5e3fd3',
    backgroundColor: 'rgba(94, 63, 211, 0.1)',
    pointBackgroundColor: '#5e3fd3',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: '#5e3fd3'
    }]
};

const config = {
    type: 'line',
    data: data,
    options: {
    responsive: true,
    scales: {
        x: {
            display: true,
            title: {
                display: true,
                text: 'Date'
            },
            grid: {
                display: false
            }
        },
        y: {
        display: false,
        title: {
            display: true,
            text: 'Value ($)'
        },
        grid: {
            drawBorder: false
        }
        }
    },
    plugins: {
        tooltip: {
        callbacks: {
            label: function(context) {
            return `$${context.raw.toFixed(2)}`;
            }
        }
        }
    }
    }
};

const myChart = new Chart(ctx, config);
const myChart2 = new Chart(ctx2, config);
const myChart3 = new Chart(ctx3, config);