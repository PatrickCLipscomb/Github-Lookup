var pdxMap = require('./../js/gmaps.js').mapModule;
var basemap;

$(document).ready(function() {
  $('#neighborhood-toggleFalse').hide();
  $('#crimeMap-toggleFalse').hide();
  basemap = new pdxMap();
  var mapObject = basemap.generateMap();
  var infoWindow = basemap.generateInfoWindow();
  var neighborhood = basemap.generateNeighborhood(infoWindow, mapObject);
  var crimePointMap;

  $('#neighborhood-toggleTrue').click(function() {
    basemap.showneighborhood(neighborhood, mapObject)
    $('#neighborhood-toggleFalse').show();
    $('#neighborhood-toggleTrue').hide();
  });
  $('#neighborhood-toggleFalse').click(function() {
    basemap.hideneighborhood(neighborhood);
    $('#neighborhood-toggleTrue').show();
    $('#neighborhood-toggleFalse').hide();
  });
  $('#crimeMap-toggleTrue').click(function() {
    var crime = "Prostitution"
    basemap.generateHeatMap(mapObject, crime)
    $('#crimeMap-toggleFalse').show();
    $('#crimeMap-toggleTrue').hide();
  });
  $('#crime-form').submit(function(event) {
    event.preventDefault();
    var crime = $('#crime-selection').val()
    crimePointMap = basemap.generateCrimePoints(crime)
    crimePointMap.setMap(mapObject)
  })
  $('#crimePointMap-toggleFalse').click(function() {
    crimePointMap.setMap(null)
  });


});
