const cardChartIcons = document.querySelectorAll('.overview__cards-item-details-icon');
const closeChartIcons = document.querySelectorAll('.close-chart');

cardChartIcons.forEach(cardChartIcon => {
    cardChartIcon.addEventListener('click', () => {
        const chartItem = cardChartIcon.parentElement.parentElement.parentElement;
        chartItem.classList.add('show-chart');
        //stockChart.update();
    });
});

closeChartIcons.forEach(closeChartIcon => {
    closeChartIcon.addEventListener('click', () => {
        const chartItem = closeChartIcon.parentElement;
        chartItem.classList.remove('show-chart');
    });
});