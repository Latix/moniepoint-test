const ctx = document.getElementById('stockChart').getContext('2d');
const ctx2 = document.getElementById('stockChart2').getContext('2d');
const ctx3 = document.getElementById('stockChart3').getContext('2d');

function formatAmount(amount) {
    // Remove the dollar sign and decimal point
    var numericString = amount[0].replace("$", "");
    numericString = numericString.split(".");
    var amountNumericString = numericString[0];
    var cents = numericString[1];

    var numericValue = parseInt(amountNumericString);

    // Convert the number to a string with commas and append the dollar sign
    var resultString = "$" + numericValue.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}).replace(/(?:\.0+|(\.\d+?)0+)$/, "$1");

    return resultString + "." + cents;
}

const data = {
    labels: ['Jan 17', 'Jan 18', 'Jan 19', 'Jan 20', 'Jan 21', 'Jan 22', 'Jan 23', 'Jan 24', 'Jan 25', 'Feb 1', 'Feb 7', 'Feb 15'],
    datasets: [{
        label: 'Value',
        data: [1200, 1210, 1220, 1230, 1240, 1250, 1260, 1270, 1300, 1324.99, 1250, 1350],
        fill: true,
        borderColor: '#5e3fd3',
        backgroundColor: 'rgba(94, 63, 211, 0.1)',
        // pointBackgroundColor: '#5e3fd3',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#5e3fd3',
        pointHoverBorderWidth: 3,
        borderWidth: 1,
        tension: 0.1
    }]
};

const config = {
    type: 'line',
    data: data,
    options: {
        interaction: {
            mode: 'index',
            intersect: false
        },
        responsive: true,
        scales: {
            x: {
                type: 'category',
                ticks: {
                    color: '#d4d4d9',
                },
                min: 'Jan 25',
                max: 'Feb 15',
                display: true,
                title: {
                    display: false,
                    text: 'Date'
                },
                grid: {
                    display: true
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
            legend: {
                display: false,
            },
            tooltip: {
                enabled: false,
                backgroundColor: '#fff',
                titleColor: '#000',
                bodyColor: '#000',
                borderColor: '#5e3fd3',
                borderWidth: 1,
                shadowOffsetX: 0,
                shadowOffsetY: 4,
                shadowBlur: 6,
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                callbacks: {
                    label: function(context) {
                        return `$${context.raw.toFixed(2)}`;
                    }
                },
                external: function(context) {
                    const tooltipModel = context.tooltip;
                    let tooltipEl = document.getElementById('chartjs-tooltip');
      
                    if (!tooltipEl) {
                      tooltipEl = document.createElement('div');
                      tooltipEl.id = 'chartjs-tooltip';
                      tooltipEl.style.position = 'absolute';
                      tooltipEl.style.background = 'rgba(255, 255, 255, 1)';
                      tooltipEl.style.border = 'none';
                      tooltipEl.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                      tooltipEl.style.pointerEvents = 'none';
                      tooltipEl.style.transition = 'all .1s ease';
                      document.body.appendChild(tooltipEl);
                    }
      
                    if (tooltipModel.opacity === 0) {
                      tooltipEl.style.opacity = 0;
                      return;
                    }
      
                    if (tooltipModel.body) {
                      const titleLines = tooltipModel.title || [];
                      const bodyLines = tooltipModel.body.map(b => b.lines);
      
                      let innerHtml = '<div style="display: flex;gap: 2px; padding: 15px;align-items: center;">';
      
                      titleLines.forEach(title => {
                        innerHtml += `<div style="display: flex; align-items: center; gap: 2px; font-size: 12px; font-weight: 400;font-family: 'Open Sans', sans-serif;color; #aeb0b6; margin-right: 5px;"><span 
                        style="width: 10px;
                        height: 10px;
                        background-color: white;
                        border: 3px solid #6e43ee;
                        border-radius: 50%;
                        display: inline-block;
                        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);margin-right: 10px;"></span> <span style="opacity: 0.4;">${title}:</span></div>`;
                      });
      
                      bodyLines.forEach(body => {
                        innerHtml += `<div style="font-size: 12px;font-weight: 400;font-family: "Roboto", sans-serif;color: #000;">${formatAmount(body)}</div>`;
                      });
      
                      innerHtml += '</div>';
      
                      tooltipEl.innerHTML = innerHtml;
                    }
      
                    const position = context.chart.canvas.getBoundingClientRect();
      
                    tooltipEl.style.opacity = 1;
                    // Calculate the horizontal position to center the tooltip
                    const tooltipWidth = tooltipEl.offsetWidth;
                    const tooltipX = position.left + window.pageXOffset + tooltipModel.caretX - (tooltipWidth / 2);
                    tooltipEl.style.left = `${tooltipX}px`;

                    // Calculate the vertical position to place the tooltip at the top
                    const tooltipHeight = tooltipEl.offsetHeight;
                    const tooltipY = position.top + window.pageYOffset + tooltipModel.caretY - tooltipHeight - 10; // Adding some offset (10px) above the circle
                    tooltipEl.style.top = `${tooltipY}px`;
                }
            }
        }
    }
};

const myChart = new Chart(ctx, config);
const myChart2 = new Chart(ctx2, config);
const myChart3 = new Chart(ctx3, config);