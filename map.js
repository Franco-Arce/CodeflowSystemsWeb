// Initialize Leaflet map
const map = L.map('map', {
    center: [-34.6037, -58.3816],
    zoom: 5,
    zoomControl: false,
    scrollWheelZoom: false
});

// Dark theme tiles
L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '© OpenStreetMap contributors © CARTO',
    subdomains: 'abcd',
    maxZoom: 20
}).addTo(map);

// Custom cyan marker style
const markerHtml = `
    <div style="
        width: 20px;
        height: 20px;
        background: #00d9ff;
        border-radius: 50%;
        box-shadow: 0 0 20px rgba(0, 217, 255, 0.8), 0 0 40px rgba(0, 217, 255, 0.4);
        border: 2px solid rgba(255, 255, 255, 0.3);
    "></div>
`;

const customIcon = L.divIcon({
    className: 'custom-marker',
    html: markerHtml,
    iconSize: [20, 20],
    iconAnchor: [10, 10]
});

// Add markers
L.marker([-34.6037, -58.3816], { icon: customIcon })
    .addTo(map)
    .bindPopup('<strong>Buenos Aires</strong><br>Sede Principal');

L.marker([-31.4201, -64.1888], { icon: customIcon })
    .addTo(map)
    .bindPopup('<strong>Córdoba</strong><br>Oficina Regional');
