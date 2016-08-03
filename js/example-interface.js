// var apiKey = require('./../.env').apiKey;
// var geoJSON = require('./../portland.geojson').geoJSON;

// var map;
// function initMap() {
//   debugger;
//   map = new google.maps.Map($('#map'), {
//     center: {lat: 45.5231, lng: -122.6765},
//     zoom: 13
//   });
//   console.log("map: " + map);
// }


var mapObject
var neighborhood;
var infoWindow;

$(document).ready(function() {
    var myOptions = {
      zoom : 11,
      center : {lat: 45.5231, lng: -122.6765},
      mapTypeId : google.maps.MapTypeId.ROADMAP
    };
    mapObject = new google.maps.Map(document.getElementById("map"), myOptions);
    infoWindow = new google.maps.InfoWindow({
       content: ""
     });
    neighborhood = new google.maps.Data();
    neighborhood.loadGeoJson('portland.json');
    neighborhood.addListener('click', function(e) {
      neighborhood.overrideStyle(e.feature, {
       strokeColor: '#2a2a2a',
       strokeWeight: 2
     });
    });
    neighborhood.addListener('click', function(e) {
      console.log(e);
      infoWindow.setContent('<div style="line-height:1.00;overflow:hidden;white-space:nowrap;">' +
      e.feature.getProperty('name') + '</div>');

      var anchor = new google.maps.MVCObject();
      anchor.set("position", e.latLng);
      infoWindow.open(mapObject, anchor);
    });
    neighborhood.setStyle({
      strokeColor: 'blue',
      strokeWeight: 2
    });
    $('#neighborhood-toggleTrue').click(function() {
      neighborhood.setMap(mapObject);
    });
    $('#neighborhood-toggleFalse').click(function() {
      neighborhood.setMap(null);
    });
});
