pdxMap = function(){

};

pdxMap.prototype.generateMap = function(){
  var mapObject = new google.maps.Map(document.getElementById('map'), {
    center : {lat: 45.5231, lng: -122.6765},
    zoom: 11,
    MapTypeId: google.maps.MapTypeId.ROADMAP
  });
  return mapObject
};

pdxMap.prototype.generateInfoWindow = function(){
  var infoWindow = new google.maps.InfoWindow({
     content: ""
   });
   return infoWindow;
};

pdxMap.prototype.generateNeighborhood = function(infoWindow, mapObject){
  var neighborhood = new google.maps.Data();
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
  return neighborhood
};

pdxMap.prototype.showneighborhood = function(layer, map){
  layer.setMap(map)
};

pdxMap.prototype.hideneighborhood = function(layer){
  layer.setMap(null)
};


exports.mapModule = pdxMap;
