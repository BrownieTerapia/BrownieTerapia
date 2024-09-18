// Inicializa el mapa y establece las coordenadas iniciales
//var map = L.map('map').setView([-18.010, -70.24], 13); // Coordenadas iniciales y zoom

// Añade el mapa base desde OpenStreetMap
L.tileLayer('https://.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Añade un marcador al mapa
var marker = L.marker([-18.017313, -70.237872]).addTo(map);

// Añade un popup al marcador
marker.bindPopup("<b>Joabi</b><br>Parque Jesus María.").openPopup();
