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
  // neighborhood.addListener('click', function(e) {
  //   neighborhood.overrideStyle(e.feature, {
  //    strokeColor: '#2a2a2a',
  //    strokeWeight: 0
  //  });
  // });
  neighborhood.addListener('click', function(e) {
    console.log(e);
    infoWindow.setContent('<div style="line-height:1.00;overflow:hidden;white-space:nowrap;">' +
    e.feature.getProperty('name') + '</div>');

    var anchor = new google.maps.MVCObject();
    anchor.set("position", e.latLng);
    infoWindow.open(mapObject, anchor);
  });
  neighborhood.setStyle({
    strokeColor: '#4C4CA6',
    strokeOpacity: '0.8',
    fillOpacity: '0.2',
    strokeWeight: .8
  });
  return neighborhood
};

pdxMap.prototype.showneighborhood = function(layer, map){
  layer.setMap(map)
};

pdxMap.prototype.hideneighborhood = function(layer){
  layer.setMap(null)
};

pdxMap.prototype.generateCrimePoints = function(crime){
  var crimeMap = new google.maps.FusionTablesLayer({
    query: {
      select: 'Latitude',
      from: '1cw-Qrd1pGwELM4vkQM_94C6ajrAsJftCf5kvnWrz',
      where: "'Major Offense Type' = '" + crime + "'",
    },
    styleID: 2
  });
  return crimeMap
};

pdxMap.prototype.generateCrimeChorpleth = function(crime){
  var crimeMap = new google.maps.FusionTablesLayer({
    query: {
      select: 'geometry',
      from: '1mJ1mYg1JF7yyZ3_Er2CyK1n8jJoQv-OFy2HXourz',
    },
    styles: [{
            polygonOptions: {
              fillColor: '#ff9999',
              fillOpacity: 0.5
            }
          }, {
            where: 'Crime > 500',
            polygonOptions: {
              fillColor: '#ff6666',
              fillOpacity: .5
            }
          }, {
            where: 'Crime > 1500',
            polygonOptions: {
              fillColor: '#b20000',
              fillOpacity: .5
            }
          }, {
            where: 'Crime > 2000',
            polygonOptions: {
              fillColor: '#7f0000',
              fillOpacity: .5
            }
          }]
  });
  return crimeMap
};


exports.mapModule = pdxMap;
