const ctx = document.getElementById('stockChart').getContext('2d');
const ctx2 = document.getElementById('stockChart2').getContext('2d');
const ctx3 = document.getElementById('stockChart3').getContext('2d');

const stockData = {
    labels: ['Jan 17', 'Jan 25', 'Feb 1', 'Feb 7', 'Feb 15'], // Example months
    datasets: [{
        label: '',
        data: [1224.99, 2424.99, 2724.99, 2524.00, 2824.99],
        borderColor: 'rgb(169, 149, 218)',
        backgroundColor: 'rgba(231, 225, 254, 0.4)',
        borderWidth: 2,
        fill: true,
        tension: 0
    }]
};

const config = {
    type: 'line', 
    data: stockData,
    options: {
        scales: {
            x: {
                title: {
                    display: false,
                    text: 'Month'
                }
            },
            y: {
                title: {
                    display: false,
                    text: 'Price ($)'
                }
            }
        },
        plugins: {
            title: {
                display: false,
                text: 'Stock Prices Over Time'
            }
        }
    }
};

const stockChart = new Chart(ctx, config);
const stockChart2 = new Chart(ctx2, config);
const stockChart3 = new Chart(ctx3, config);