/*
Skript für Neuseelandreise
*/

let lat = -44.616667;
let lng = 167.866667;
let zoom = 12;

let stop = {
    nr: "18",
    title: "Milford Sound",
    user: "Pruje839",
    lat: "-44.616667",
    lng: "167.866667",
    zoom: "12",
};
// Karte initalisieren 
let map = L.map('map').setView([lat, lng], zoom);

//Hintergrundkarte definieren
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//Marker zeichnen 
let marker = L.marker([lat, lng]).addTo(map);

//Popup definieren und öffnen
marker.bindPopup(`
    <h2>Milford Sound</h2>
    <ul>
        <li> Geogr. Breite: ${lat.toFixed(3)}° </li>
        <li> Geogr. Länge: ${lng.toFixed(3)}° </li>
    </ul>
`).openPopup();

