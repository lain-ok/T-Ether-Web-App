var map = L.map('map');
        map.setView([51.2, 7], 9);

        L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 18,
            attribution: 'Map data &copy; OpenStreetMap contributors'
        }).addTo(map);

        var marker = L.marker([51.2, 7]).addTo(map);

        var sidebar = L.control.sidebar('sidebar').addTo(map);