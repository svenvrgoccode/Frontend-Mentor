var map = L.map('map').setView([41.48214, -71.31051], 13);
var marker = L.marker([41.48214, -71.31051]).addTo(map);

marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);
