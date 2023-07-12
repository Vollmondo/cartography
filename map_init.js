// Работаем с leaflet. Документация: https://mourner.github.io/Leaflet/reference.html
            
//Установка начальных координат (широта и долгата + зум)
var map = L.map('map').setView([55.15874249418191, 61.402664998934284], 18);
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
            
//Собираем стопку из дополнительных карт   
// Добавляем слои
var layers = {
            
    OpenStreetMaps: L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'),

    Wikimapia: new L.tileLayer('http://{s}{hash}.wikimapia.org/?x={x}&y={y}&zoom={z}&r=7071412&type=&lng=1', {hash: function (data) {return data.x % 4 + (data.y % 4) *4;}, subdomains : 'i' , maxZoom: 20}),
                
    }
            
//Добавляем оверлэи
var overlays = {

    "Покрытие Мегафон": L.tileLayer('https://coverage-map.megafon.ru/{z}/{x}/{y}.png', {maxZoom: 20}),

    }
            
//Добавляем собранную стопку на страницу в правом верхнем углу     
L.control.layers(layers, overlays).addTo(this.map);

//Добавляем контроллер для отображения масштаба карты
L.control.scale({
    position:'bottomleft'
    }).addTo(map);