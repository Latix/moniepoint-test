const cardChartIcons = document.querySelectorAll('.overview__cards-item-details-icon');
const closeChartIcons = document.querySelectorAll('.close-chart');
const cashMoneyItems = document.querySelectorAll('.transactions__wrapper-cash-money-item');

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

cashMoneyItems.forEach((cashMoneyItem, index) => {
    cashMoneyItem.addEventListener('click', () => {
        (index === 0) ? cashMoneyItems[1].classList.remove('active') : cashMoneyItems[0].classList.remove('active');
        cashMoneyItem.classList.add('active');
    });
});