/*
Skript für Neuseelandreise
*/

//Karte initialisieren
let map = L.map('map').setView([-44.616667, 167.866667], 12);

//Hintergrundkarte definieren
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//Marker zeichnen 
let marker = L.marker([-44.616667, 167.866667]).addTo(map);

//Popup definieren und öffnen
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();