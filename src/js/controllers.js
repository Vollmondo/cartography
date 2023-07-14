// Работаем с leaflet. Документация: https://mourner.github.io/Leaflet/reference.html

//Добавляем контроллер для отображения масштаба карты
L.control.scale({
    position:'bottomleft'
    }).addTo(this.map);

//Маркер
const basicBeachIcon = L.icon({
    iconUrl: 'src/img/location-pin-svgrepo-com.svg',
    iconSize: [40, 40],
});
    
const marker1 = L.marker([55.158661, 61.402688], {icon: basicBeachIcon})
    .bindPopup('Фонтан')
    .addTo(this.map);

//устанавливаем контроллер c погодой
L.Control.MyControl = L.Control.extend({
    onAdd: function(map) {
    var el = L.DomUtil.create('div', 'leaflet-bar my-control');
    el.innerHTML = '<div><ul class="weatherbuttonblock"><button id="weatherblockbutton" type="button">Погода</button><li><button class="weatherbutton" id="weatherbutton" type="button">Текущая &nbsp;погода</button></li><li><button class="weatherbutton" id="weatherforecast" type="button">Прогноз&nbsp;погоды<br>на&nbsp;ближайшие&nbsp;3&nbsp;часа</button></li><li class="weatherbutton"><a href="#" id="weather5DaysForecast">Прогноз&nbsp;погоды<br>на&nbsp;5&nbsp;дней</a></li></ul></div>';
    return el;
    },
});

L.control.myControl = function(opts) {
    return new L.Control.MyControl(opts);
}
L.control.myControl({
  position: 'bottomright'
}).addTo(map);

// обрабатываем направление ветра
function getCardinalDirection(angle) {
    const directions = ['северный', 'северо-восточный', 'восточный', 'юго-восточный', 'южный', 'юго-западный', 'западный', 'северо-западный'];
    return directions[Math.round(angle / 45) % 8];
}

//вызов функционала кнопки "Текущая погода"
const currentWeatherCallback = () => {
    
fetch('https://api.openweathermap.org/data/2.5/weather?lat=55.2751&lon=61.4254&appid=apikey&units=metric&lang=ru')
    .then(response => response.json())
    .then(response => alert(`Температура: ${response.main.temp} °C
Ощущается как: ${response.main.feels_like} °C
${response.weather[0].description}
Влажность: ${response.main.humidity} %
Ветер : ${getCardinalDirection(response.wind.deg)} ${response.wind.speed} м/с
`));

};
const currentWeatherbutton = document.querySelector('#weatherbutton');
currentWeatherbutton.addEventListener('click', currentWeatherCallback);


//вызов функционала кнопки "Прогноз погоды на ближайшие 3 часа"
const weatherForecastCallback = () => {
    
fetch('https://api.openweathermap.org/data/2.5/forecast?lat=55.2751&lon=61.4254&cnt=1&appid=apikey&units=metric&lang=ru')
    .then(response => response.json())
    .then(response => alert(`Температура: ${response.list[0].main.temp} °C
Ощущается как: ${response.list[0].main.feels_like} °C
${response.list[0].weather[0].description}
Влажность: ${response.list[0].main.humidity} %
Ветер : ${getCardinalDirection(response.list[0].wind.deg)} ${response.list[0].wind.speed} м/с
`));

};
const weatherForecastbutton = document.querySelector('#weatherforecast');
weatherForecastbutton.addEventListener('click', weatherForecastCallback);
