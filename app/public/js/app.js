var map = L.map('map').setView([0, 0], 1);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoid2lsbGtvcGlsIiwiYSI6ImNsMHdrZG5oajFpMTUzam8yY3hjZjFocXoifQ.NjF0MCBzlL8nXxE0SUk5RQ'
}).addTo(map);

map.locate({setView: true, maxZoom: 16});
