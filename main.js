L.tileLayer('https://.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 20,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
  var myIcon = L.icon({
    iconUrl: 'img/marker.png',
    iconSize: [38, 40],
    iconAnchor: [22, 39],
    popupAnchor: [-2, -40],
    /*shadowUrl: 'img/marker.png',
    shadowSize: [35, 38],
    shadowAnchor: [35, 38]*/
  });
  var myIconP = L.icon({
    iconUrl: 'img/marker1.png',
    iconSize: [48, 48],
    iconAnchor: [22, 47],
    popupAnchor: [0, -50],
  });
 // Añade un marcador al mapa
  var marker1 = L.marker([-18.017313, -70.237872], {icon: myIcon}).addTo(map);
  marker1.bindPopup("<b>Joabi</b><br>Parque Jesus María.");
  //.openPopup();
  
  var marker2 = L.marker([-18.0095, -70.249277], {icon: myIcon}).addTo(map);
  marker2.bindPopup("<b>Golosilandia</b><br>Calderon de la Barca.");
  
  var marker3 = L.marker([-18.037459, -70.25109], {icon: myIcon}).addTo(map);
  marker3.bindPopup("<b>Tienda Etérea</b><br>Frente a la plaza <br> Perez gamboa");
  
  var marker4 = L.marker([-18.0167047, -70.25180], {icon: myIcon}).addTo(map);
  marker4.bindPopup("<b>Tloc Cookies</b><br>Sir Jones 25");
  
  var marker5 = L.marker([-18.0129808, -70.24936], {icon: myIcon}).addTo(map);
  marker5.bindPopup("<b>Comerical Jhilmar</b><br>Calle Apurímac 260");
  
  var marker6 = L.marker([-18.0073255, -70.2475495], {icon: myIcon}).addTo(map);
  marker6.bindPopup("<b>Yogurt de casa Sabi</b><br>Avenida Leguía 980<br>Más arriba de tacna centro");
  
  var marker7 = L.marker([-18.00568, -70.22544], {icon: myIcon}).addTo(map);
  marker7.bindPopup("<b>Cafetería Facsa Upt</b><br>Interior de la Universidad<br>Privada de Tacna</br><b>7 AM - 9 PM</b></br>Lunes a Viernes");

  var marker8 = L.marker([-18.01749, -70.240883], {icon: myIconP}).addTo(map);
  marker8.bindPopup("<b>Taller Principal</b><br>Frente a Cara Negra");
  
  var marker9 = L.marker([-18.012152, -70.2488692], {icon: myIconP}).addTo(map);
  marker9.bindPopup("<b>Punto de Venta</b><br>");

    var marker10 = L.marker([-18.010613, -70.254205], {icon: myIcon}).addTo(map);
  marker4.bindPopup("<b>Kiosco Lucía</b><br><b>7 AM - 7 PM</b></br>Lunes a Viernes");
