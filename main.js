L.tileLayer('https://.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
  
  // Añade un marcador al mapa
  var marker1 = L.marker([-18.017313, -70.237872]).addTo(map);
  marker1.bindPopup("<b>Joabi</b><br>Parque Jesus María.");
  //.openPopup();
  
  var marker2 = L.marker([-18.0095, -70.2517]).addTo(map);
  marker2.bindPopup("<b>Golosilandia</b><br>Calderon de la Barca.");
  
  var marker3 = L.marker([-18.037459, -70.25109]).addTo(map);
  marker3.bindPopup("<b>Tienda Etérea</b><br>Frente a la plaza <br> Perez gamboa");
  
  var marker4 = L.marker([-18.0167047, -70.25180]).addTo(map);
  marker4.bindPopup("<b>Tloc Cookies</b><br>Sir Jones 25");
  
  var marker5 = L.marker([-18.0129808, -70.24936]).addTo(map);
  marker5.bindPopup("<b>Comerical Jhilmar</b><br>Calle Apurímac 260");
  
  var marker6 = L.marker([-18.0073255, -70.2475495]).addTo(map);
  marker6.bindPopup("<b>Yogurt de casa Sabi</b><br>Avenida Leguía 980<br>Más arriba de tacna centro");
  
  var marker7 = L.marker([-18.00568, -70.22544]).addTo(map);
  marker7.bindPopup("<b>Cafetería Facsa Upt</b><br>Interior de la Universidad<br>Privada de Tacna");

