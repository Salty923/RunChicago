
    function getLocation() {
        if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}

getLocation();

    function showPosition(position) {
        console.log("Latitude: " + position.coords.latitude +
            "<br>Longitude: " + position.coords.longitude);

    var mymap = L.map('mapid').setView([41.88, -87.63], 10);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiYXNtaXNocmE5MyIsImEiOiJjamNta3NpOHUweGEwMzBzM3ZsN2N1Nmd4In0.Lafwt0paj0QE9tIjd31bCg'
}).addTo(mymap);

var marker = L.marker([position.coords.latitude, position.coords.longitude]).addTo(mymap);
    marker.bindPopup("<b>Hello, world!</b><br>You are here").openPopup();

    }