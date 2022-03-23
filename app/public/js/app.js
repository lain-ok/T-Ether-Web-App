var map = L.map('map');
        map.setView([51.2, 7], 9);

        L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 18,
            attribution: 'Map data &copy; OpenStreetMap contributors'
        }).addTo(map);

var sidebar = L.control.sidebar('sidebar').addTo(map);

var marker = L.marker([45.420502, -75.704781]).addTo(map);

function onLocationFound(e) {
        var radius = e.accuracy / 10;

        L.marker(e.latlng).addTo(map)
                .bindPopup("You are within " + radius + " meters from this point").openPopup();

        L.circle(e.latlng, radius).addTo(map);
}

function onLocationError(e) {
        alert(e.message);
}

map.on('locationfound', onLocationFound);
map.on('locationerror', onLocationError);

map.locate({setView: true, maxZoom: 16});
