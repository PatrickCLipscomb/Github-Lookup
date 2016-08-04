var pdxMap = require('./../js/gmaps.js').mapModule;
var basemap;
var layerArry = []

$(document).ready(function() {
  $('#neighborhood-toggleFalse').hide();
  $('#choropleth-toggleFalse').hide();
  $('#crimeMap-toggleFalse').hide();
  basemap = new pdxMap();
  var mapObject = basemap.generateMap();
  var infoWindow = basemap.generateInfoWindow();
  var neighborhood = basemap.generateNeighborhood(infoWindow, mapObject);
  var choropleth = basemap.generateCrimeChorpleth()
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
    layerArry.push(crimePointMap)
  })
  $('#crimePointMap-toggleFalse').click(function() {
    var crimePointsRemove = layerArry.pop()
    crimePointsRemove.setMap(null)
  });
  $('#choropleth-toggleTrue').click(function() {
    choropleth.setMap(mapObject)
    $('#choropleth-toggleFalse').show();
    $('#choropleth-toggleTrue').hide();
  });
  $('#choropleth-toggleFalse').click(function() {
    choropleth.setMap(null)
    $('#choropleth-toggleTrue').show();
    $('#choropleth-toggleFalse').hide();
  });


});
