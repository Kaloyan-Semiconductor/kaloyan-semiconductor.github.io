function initMap() {
    const ruse = { lat: 43.8564, lng: 25.9736 };

    const mapStyles = [
        {
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#f5f5f5"
                }
            ]
        },
        {
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#616161"
                }
            ]
        },
        {
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "color": "#f5f5f5"
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "administrative.land_parcel",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#bdbdbd"
                }
            ]
        },
        {
            "featureType": "administrative.neighborhood",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#eeeeee"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "labels.text",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#757575"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#e5e5e5"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#9e9e9e"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#757575"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#dadada"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#616161"
                }
            ]
        },
        {
            "featureType": "road.local",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#9e9e9e"
                }
            ]
        },
        {
            "featureType": "transit",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#e5e5e5"
                }
            ]
        },
        {
            "featureType": "transit.station",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#eeeeee"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#c9c9c9"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels.text",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#9e9e9e"
                }
            ]
        }
    ];

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 11,
        center: ruse,
        styles: mapStyles,
        disableDefaultUI: true,
        zoomControl: true,
        scrollwheel: false,
        draggable: false
    });

    new google.maps.Marker({
        position: ruse,
        map: map,
        title: "Kaloyan Semiconductor - Ruse, Bulgaria"
    });
}

// SoC/NPU Pattern Visualization
const canvas = document.getElementById('neuralNetworkCanvas');
const ctx = canvas.getContext('2d');
let time = 0;
const gridSize = 60;
const patternColors = {
    primary: '#00805c', // Adjusted for better contrast
    secondary: '#B22222', // Adjusted for better contrast
    primaryLight: 'rgba(0, 128, 92, 0.1)', // Adjusted for better contrast
    secondaryLight: 'rgba(178, 34, 34, 0.1)', // Adjusted for better contrast
    lines: 'rgba(0, 128, 92, 0.15)' // Adjusted for better contrast
};

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = document.querySelector('.hero').offsetHeight;
}

function drawSoCPattern() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const cols = Math.ceil(canvas.width / gridSize) + 2;
    const rows = Math.ceil(canvas.height / gridSize) + 2;

    // Draw grid lines
    ctx.strokeStyle = patternColors.lines;
    ctx.lineWidth = 0.5;

    for (let i = 0; i <= cols; i++) {
        const x = (i * gridSize) - (time * 0.08) % gridSize;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
    }

    for (let j = 0; j <= rows; j++) {
        const y = (j * gridSize) - (time * 0.06) % gridSize;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
    }

    // Draw processing units (squares and circles)
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            const x = (i * gridSize) - (time * 0.08) % gridSize;
            const y = (j * gridSize) - (time * 0.06) % gridSize;

            if (x > -gridSize && x < canvas.width + gridSize &&
                y > -gridSize && y < canvas.height + gridSize) {

                const pulse = Math.sin(time * 0.01 + i * 0.1 + j * 0.1) * 0.5 + 0.5;
                const isPrimary = (i + j) % 3 === 0;

                if (isPrimary) {
                    // Processing cores (squares)
                    const size = 1 + pulse * 4;
                    ctx.fillStyle = pulse > 0.7 ? patternColors.primary : patternColors.primaryLight;
                    ctx.fillRect(x - size/2, y - size/2, size, size);

                    // Core center
                    ctx.fillStyle = patternColors.primary;
                    ctx.fillRect(x - 2, y - 2, 4, 4);
                } else if ((i + j) % 5 === 0) {
                    // Memory units (circles)
                    const radius = 1 + pulse * 3;
                    ctx.fillStyle = pulse > 0.6 ? patternColors.secondary : patternColors.secondaryLight;
                    ctx.beginPath();
                    ctx.arc(x, y, radius, 0, Math.PI * 2);
                    ctx.fill();

                    // Memory center
                    ctx.fillStyle = patternColors.secondary;
                    ctx.beginPath();
                    ctx.arc(x, y, 2, 0, Math.PI * 2);
                    ctx.fill();
                }

                // Data pathways (subtle connecting lines)
                if ((i + j) % 7 === 0 && pulse > 0.8) {
                    ctx.strokeStyle = `rgba(0, 128, 92, ${pulse * 0.3})`; // Adjusted for better contrast
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(x - 15, y);
                    ctx.lineTo(x + 15, y);
                    ctx.moveTo(x, y - 15);
                    ctx.lineTo(x, y + 15);
                    ctx.stroke();
                }
            }
        }
    }
}

function animate() {
    time++;
    drawSoCPattern();
    requestAnimationFrame(animate);
}

window.addEventListener('load', () => {
    resizeCanvas();
    animate();
});

window.addEventListener('resize', () => {
    resizeCanvas();
});