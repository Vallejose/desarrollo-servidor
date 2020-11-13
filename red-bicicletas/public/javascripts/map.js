var mymap = L.map('mapid').setView([-34.9068839, -56.2009993, 18], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoic3ZhbGxlIiwiYSI6ImNraGdtaDc2djAwMXkyc205dXdxeWZ4M3YifQ.zo7KHMLTCKdCZVntvkgG6Q'
}).addTo(mymap);

var markerFortaleza = L.marker([-34.8884468, -56.2602121, 17]).addTo(mymap);
var markerEstadio = L.marker([-34.8945332, -56.1530176, 17]).addTo(mymap);
var markeFaro = L.marker([-34.937289, -56.1600945, 16]).addTo(mymap);