/*
Skript für Neuseelandreise
*/

//Karte initialisieren
let lat= -44.616667;
let lng= 167.866667;
let zoom= 12;

let map = L.map('map').setView([lat, lng], zoom);

//Hintergrundkarte definieren
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//Marker zeichnen 
let marker = L.marker([lat, lng]).addTo(map);

//Popup definieren und öffnen
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();