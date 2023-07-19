Highcharts.lang.months([
    'Января', 'Февраля', 'Марта', 'Апреля',
    'Мая', 'Июня', 'Июля', 'Августа',
    'Сентября', 'Октября', 'Ноября', 'Декабря'
]);

Highcharts.setOptions({
    lang: {
        months: [
            'Января', 'Февраля', 'Марта', 'Апреля',
            'Мая', 'Июня', 'Июля', 'Августа',
            'Сентября', 'Октября', 'Ноября', 'Декабря'
        ],
        weekdays: [
            'Вс', 'Пн', 'Вт', 'Ср',
            'Чт', 'Пт', 'Сб'
        ]
    }
});

(async () => {

    /*const data = await fetch(
        'https://demo-live-data.highcharts.com/aapl-c.json'
    ).then(response => response.json());*/
    
    // Load the dataset
    const data = await fetch(
        '../js/data.txt'
    ).then(response => response.json());

    Highcharts.stockChart('container', {
        
        rangeSelector: {
            selected: 0
        },

        title: {
        text: 'Прогноз&nbsp;погоды'
        },

        navigator: {
            enabled: false
        },

        series: [{
        name: 'Температура',
        data: data,
        tooltip: {
                valueDecimals: 1
            }
        }]
    });
})();
