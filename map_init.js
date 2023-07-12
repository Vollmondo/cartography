// Работаем с leaflet. Документация: https://mourner.github.io/Leaflet/reference.html
            
//Установка начальных координат (широта и долгата + зум)
var map = L.map('map').setView([55.15874249418191, 61.402664998934284], 18);
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
            
//Собираем стопку из дополнительных карт   
// Добавляем слои
var layers = {
            
    OpenStreetMaps: L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'),

    Wikimapia: new L.tileLayer('http://{s}{hash}.wikimapia.org/?x={x}&y={y}&zoom={z}&r=7071412&type=&lng=1', {
        hash: function (data) {return data.x % 4 + (data.y % 4) *4;}, subdomains : 'i' , maxZoom: 20
        }),

    "2GIS": new L.tileLayer('http://tile2.maps.2gis.com/tiles?x={x}&y={y}&z={z}', {maxZoom: 18}),
            
    Google: new L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
        maxZoom: 20, subdomains:['mt0','mt1','mt2','mt3']
        }),
            
    "Google&nbspГибрид": new L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{
        maxZoom: 20, subdomains:['mt0','mt1','mt2','mt3']
        }),
            
    "Спутник&nbspGoogle": new L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
        maxZoom: 20, subdomains:['mt0','mt1','mt2','mt3']
        }),
            
    "Спутник&nbspEsri": L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'),
            
    /*GoogleTerrain: L.tileLayer('http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}',{
        maxZoom: 20, subdomains:['mt0','mt1','mt2','mt3']
        }),*/
            
    "Дорожный&nbspтрафик": L.tileLayer('https://{s}.google.com/vt/lyrs=m@221097413,traffic&x={x}&y={y}&z={z}', {
        maxZoom: 20, subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
        }),
            
    /*нужен api_key, чтобы небыло бесячей надписи
    CycleMap: L.tileLayer('https://{s}.tile.thunderforest.com/cycle/{z}/{x}/{y}{r}.png?', {
        maxZoom:20
        }),*/

    /*нужен api_key, чтобы небыло бесячей надписи
    TransportMap: L.tileLayer('https://{s}.tile.thunderforest.com/transport/{z}/{x}/{y}{r}.png?', {
        maxZoom:20
        }),*/

    //Карта общественного транспорта
    OPNVKarte: L.tileLayer('https://tileserver.memomaps.de/tilegen/{z}/{x}/{y}.png', {
        maxZoom:18
        }),

    //Гумманитарная карта
    HOT: L.tileLayer('https://tile-{s}.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        maxZoom:20,subdomains:"abc"
        }),

    "Топография&nbspOSM": L.tileLayer('https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png',{
        maxZoom:20,subdomains:"abc"
        }),
            
    "Топография&nbspOTM": L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
        maxZoom:20
        }),
            
    "Ч/б": L.tileLayer('https://stamen-tiles.a.ssl.fastly.net/toner/{z}/{x}/{y}.png'),
            
    "акварель": L.tileLayer('https://stamen-tiles.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg'),
        
    //Светлая карта, например, для оверлэев
    "зима": L.tileLayer('https://api.maptiler.com/maps/winter-v2/{z}/{x}/{y}.png?key=3jujbuCXBoDRYsioIlsI'), 
                
    }
            
//Добавляем оверлэи
var overlays = {

    "Покрытие Мегафон": L.tileLayer('https://coverage-map.megafon.ru/{z}/{x}/{y}.png', {maxZoom: 20}),

    }
            
//Добавляем собранную стопку на страницу в правом верхнем углу     
L.control.layers(layers, overlays).addTo(this.map);

