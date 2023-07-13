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
<<<<<<< Updated upstream
            
=======
>>>>>>> Stashed changes
    /*нужен api_key, чтобы небыло бесячей надписи
    CycleMap: L.tileLayer('https://{s}.tile.thunderforest.com/cycle/{z}/{x}/{y}{r}.png?', {
        maxZoom:20
        }),*/

    /*нужен api_key, чтобы небыло бесячей надписи
    TransportMap: L.tileLayer('https://{s}.tile.thunderforest.com/transport/{z}/{x}/{y}{r}.png?', {
        maxZoom:20
        }),*/

    "Общественный&nbspтранспорт": L.tileLayer('https://tileserver.memomaps.de/tilegen/{z}/{x}/{y}.png', {
        maxZoom:18
        }),

    "Гумманитарная&nbspкарта": L.tileLayer('https://tile-{s}.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
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
                
    };
            
//Добавляем оверлэи
var overlays = {

    GPS: L.tileLayer('https://gps.tile.openstreetmap.org/lines/{z}/{x}/{y}.png', {maxZoom:20,subdomains:"abc"}),
            
    "Железнодорожная": L.tileLayer('https://{s}.tiles.openrailwaymap.org/standard/{z}/{x}/{y}.png'),
        
    "Покрытие&nbspМТС": L.tileLayer ('https://tiles.qsupport.mts.ru/LTE_New/{z}/{x}/{y}', {
        maxZoom: 20
        }),
            
    "Покрытие&nbspTele2": L.tileLayer ('https://msk.tele2.ru/maps/_3g/{z}/{x}/{y}.png', {
        maxZoom: 20
        }),
            
    "Покрытие&nbspБилайн": L.tileLayer ('https://static.beeline.ru/upload/tiles/4G/current/{z}/{x}/{y}.png', {
        maxZoom: 20
        }),

    "Покрытие&nbspМегафон": L.tileLayer('https://coverage-map.megafon.ru/{z}/{x}/{y}.png', {
        maxZoom: 20
        }),
    
    Температура: new L.tileLayer('http://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=apikey', 
        {maxZoom: 20,
        attribution: '<div style="display: block; background: none; box-shadow: none; border-width: 0px; width: 360px; height: 27px; -webkit-text-size-adjust: 100%; -webkit-tap-highlight-color: transparent; -webkit-font-smoothing: antialiased; font: 12px/1.5 Helvetica Neue,Arial,Helvetica,sans-serif; box-sizing: border-box; color: #777; position: relative; z-index: 7; pointer-events: auto; clear: both; cursor: auto; font-family: "Space Grotesk",Arial,sans-serif; font-size: 10px; border-radius: 5px; padding: 0; float: right; margin-bottom: 10px; display: block; background: none; box-shadow: none; border-width: 0px; margin-right: 10px; width: 360px; height: 27px;"><div style="background-image: none; position: relative; border-width: 0px; margin: 0px;-webkit-text-size-adjust: 100%; box-sizing: border-box; height: 5px; border-top: 1px solid #777; border-bottom: 1px solid #777; background-image: none; position: relative; border-width: 0px; margin: 0px;"><div style="-webkit-text-size-adjust: 100%; box-sizing: border-box; color: #48484a; height: 20pt; display: flex; -webkit-box-align: center; align-items: center; padding: 2pt 4pt; background-color: #fff; border-radius: 4pt; box-shadow: 0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24); transition: box-shadow .1s ease-out,-webkit-box-shadow .1s ease-out; -webkit-box-pack: justify; justify-content: space-between; font-size: 10px; margin-bottom: 0;"><div>Температура, °C</div><div style="width: 260px; font-size: 10px;box-sizing: border-box;display: flex;-webkit-box-orient: vertical;-webkit-box-direction: normal;flex-direction: column;"><div style="box-sizing: border-box; display: flex; width: 100%; -webkit-box-pack: justify; justify-content: space-between;"><div>-40</div><div>-20</div><div>0</div><div>20</div><div>40</div></div><div style="background-image: linear-gradient(to right, rgb(159, 85, 181) 0%, rgb(44, 106, 187) 8.75%, rgb(82, 139, 213) 12.5%, rgb(103, 163, 222) 18.75%, rgb(142, 202, 240) 25%, rgb(155, 213, 244) 31.25%, rgb(172, 225, 253) 37.5%, rgb(194, 234, 255) 43.75%, rgb(255, 255, 208) 50%, rgb(254, 248, 174) 56.25%, rgb(254, 232, 146) 62.5%, rgba(254, 226, 112) 68.75%, rgba(253, 212, 97) 75%, rgba(244, 168, 94) 82.5%, rgb(244, 129, 89) 87.5%, rgb(244, 104, 89) 93.75%, rgb(244, 76, 73) 100%); -webkit-text-size-adjust: 100%;-webkit-box-direction: normal; box-sizing: border-box; border-radius: 4pt; height: 4px; opacity: .9; width: 260px; border-left: 1px solid #f2f2f2; border-bottom: 1px solid #f2f2f2;"></div></div></div></div></div>'
        }),
    
    Осадки: L.tileLayer('http://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=apikey', 
        {maxZoom: 20,
        attribution: '<div style="display: block; background: none; box-shadow: none; border-width: 0px; width: 360px; height: 27px; -webkit-text-size-adjust: 100%; -webkit-tap-highlight-color: transparent; -webkit-font-smoothing: antialiased; font: 12px/1.5 Helvetica Neue,Arial,Helvetica,sans-serif; box-sizing: border-box; color: #777; position: relative; z-index: 7; pointer-events: auto; clear: both; cursor: auto; font-family: "Space Grotesk",Arial,sans-serif; font-size: 10px; border-radius: 5px; padding: 0; float: right; margin-bottom: 10px; display: block; background: none; box-shadow: none; border-width: 0px; margin-right: 10px; width: 360px; height: 27px;"><div style="background-image: none; position: relative; border-width: 0px; margin: 0px;-webkit-text-size-adjust: 100%; box-sizing: border-box; height: 5px; border-top: 1px solid #777; border-bottom: 1px solid #777; background-image: none; position: relative; border-width: 0px; margin: 0px;"><div style="-webkit-text-size-adjust: 100%; box-sizing: border-box; color: #48484a; height: 20pt; display: flex; -webkit-box-align: center; align-items: center; padding: 2pt 4pt; background-color: #fff; border-radius: 4pt; box-shadow: 0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24); transition: box-shadow .1s ease-out,-webkit-box-shadow .1s ease-out; -webkit-box-pack: justify; justify-content: space-between; font-size: 10px; margin-bottom: 0;"><div>Осадки, мм/ч</div><div style="width: 260px; font-size: 10px;box-sizing: border-box;display: flex;-webkit-box-orient: vertical;-webkit-box-direction: normal;flex-direction: column;"><div style="box-sizing: border-box; display: flex; width: 100%; -webkit-box-pack: justify; justify-content: space-between;"><div>0</div><div>1</div><div>10</div><div>20</div><div>40</div><div>100</div><div>200</div></div><div class="horizontal-gradient-line" style="width: 260px; background: linear-gradient(to right, rgb(170, 43, 195), rgb(172, 170, 247), rgb(141, 138, 243), rgb(112, 110, 194), rgb(86, 88, 255), rgb(91, 93, 177), rgb(62, 63, 133), rgba(0, 0, 0));-webkit-text-size-adjust: 100%;-webkit-box-direction: normal; box-sizing: border-box; border-radius: 4pt; height: 4px; opacity: .9; width: 260px; border-left: 1px solid #f2f2f2; border-bottom: 1px solid #f2f2f2;"></div></div></div></div></div>'
        }),
    
    Ветер: L.tileLayer('http://tile.openweathermap.org/map/wind_new/{z}/{x}/{y}.png?appid=apikey',
        {maxZoom: 20,
        attribution: '<div style="display: block; background: none; box-shadow: none; border-width: 0px; width: 360px; height: 27px; -webkit-text-size-adjust: 100%; -webkit-tap-highlight-color: transparent; -webkit-font-smoothing: antialiased; font: 12px/1.5 Helvetica Neue,Arial,Helvetica,sans-serif; box-sizing: border-box; color: #777; position: relative; z-index: 7; pointer-events: auto; clear: both; cursor: auto; font-family: "Space Grotesk",Arial,sans-serif; font-size: 10px; border-radius: 5px; padding: 0; float: right; margin-bottom: 10px; display: block; background: none; box-shadow: none; border-width: 0px; margin-right: 10px; width: 360px; height: 27px;"><div style="background-image: none; position: relative; border-width: 0px; margin: 0px;-webkit-text-size-adjust: 100%; box-sizing: border-box; height: 5px; border-top: 1px solid #777; border-bottom: 1px solid #777; background-image: none; position: relative; border-width: 0px; margin: 0px;"><div style="-webkit-text-size-adjust: 100%; box-sizing: border-box; color: #48484a; height: 20pt; display: flex; -webkit-box-align: center; align-items: center; padding: 2pt 4pt; background-color: #fff; border-radius: 4pt; box-shadow: 0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24); transition: box-shadow .1s ease-out,-webkit-box-shadow .1s ease-out; -webkit-box-pack: justify; justify-content: space-between; font-size: 10px; margin-bottom: 0;"><div>Ветер, м/с</div><div style="width: 260px; font-size: 10px;box-sizing: border-box;display: flex;-webkit-box-orient: vertical;-webkit-box-direction: normal;flex-direction: column;"><div style="box-sizing: border-box; display: flex; width: 100%; -webkit-box-pack: justify; justify-content: space-between;"><div>0</div><div>2</div><div>3</div><div>6</div><div>12</div><div>25</div><div>50</div><div>100</div></div><div class="horizontal-gradient-line" style="width: 260px; background: linear-gradient(to left, rgb(158, 128, 177), rgba(116, 76, 172, 0.9), rgb(164, 123, 170), rgba(170, 128, 177, 0.84), rgba(176, 128, 177, 0.71), rgba(170, 128, 177, 0.54), rgba(170, 128, 177, 0.44), rgba(255, 255, 0, 0));-webkit-text-size-adjust: 100%;-webkit-box-direction: normal; box-sizing: border-box; border-radius: 4pt; height: 4px; opacity: .9; width: 260px; border-left: 1px solid #f2f2f2; border-bottom: 1px solid #f2f2f2;"></div></div></div></div></div>'
        }), 

    };
            
//Добавляем собранную стопку на страницу - по умолчанию - в правом верхнем углу     
L.control.layers(layers, overlays).addTo(this.map);

