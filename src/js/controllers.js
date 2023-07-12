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