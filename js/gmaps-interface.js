var pdxMap = require('./../js/gmaps.js').mapModule;
var basemap;

$(document).ready(function() {
  basemap = new pdxMap();
  var mapObject = basemap.generateMap();

  var infoWindow = basemap.generateInfoWindow();
  var neighborhood = basemap.generateNeighborhood(infoWindow, mapObject);

  $('#neighborhood-toggleTrue').click(function() {
    basemap.showneighborhood(neighborhood, mapObject)
  });
  $('#neighborhood-toggleFalse').click(function() {
    basemap.hideneighborhood(neighborhood)
  });
});
