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
    strokeWeight: 0.8
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
              fillOpacity: 0.5
            }
          }, {
            where: 'Crime > 1500',
            polygonOptions: {
              fillColor: '#b20000',
              fillOpacity: 0.5
            }
          }, {
            where: 'Crime > 2000',
            polygonOptions: {
              fillColor: '#7f0000',
              fillOpacity: 0.5
            }
          }]
  });
  return crimeMap
};
exports.mapModule = pdxMap;

pdxMap.prototype.generateAssultHeatmap = function() {
  MVCarry = [
  new google.maps.LatLng(45.5183869616563, -122.673260743214),
  new google.maps.LatLng(45.5170703243632, -122.673964131314),
  new google.maps.LatLng(45.5231334180853, -122.6723656911),
  new google.maps.LatLng(45.5231334180853, -122.6723656911),
  new google.maps.LatLng(45.5245623030274, -122.672418802181),
  new google.maps.LatLng(45.5245623030274, -122.672418802181),
  new google.maps.LatLng(45.5225320926912, -122.672207602114),
  new google.maps.LatLng(45.5231334180853, -122.6723656911),
  new google.maps.LatLng(45.5231334180853, -122.6723656911),
  new google.maps.LatLng(45.5220013290236, -122.672388299985),
  new google.maps.LatLng(45.5213227484195, -122.672747638028),
  new google.maps.LatLng(45.520656292069, -122.673108467445),
  new google.maps.LatLng(45.5173241146492, -122.674912732985),
  new google.maps.LatLng(45.5173241146492, -122.674912732985),
  new google.maps.LatLng(45.5173241146492, -122.674912732985),
  new google.maps.LatLng(45.5166573685164, -122.675274060311),
  new google.maps.LatLng(45.5173241146492, -122.674912732985),
  new google.maps.LatLng(45.5231238208544, -122.673368078788),
  new google.maps.LatLng(45.5231238208544, -122.673368078788),
  new google.maps.LatLng(45.5231238208544, -122.673368078788),
  new google.maps.LatLng(45.5231238208544, -122.673368078788),
  new google.maps.LatLng(45.5238309797411, -122.673406654217),
  new google.maps.LatLng(45.5238309797411, -122.673406654217),
  new google.maps.LatLng(45.5238309797411, -122.673406654217),
  new google.maps.LatLng(45.5238309797411, -122.673406654217),
  new google.maps.LatLng(45.5215910784627, -122.673756843722),
  new google.maps.LatLng(45.5209197228922, -122.674093124137),
  new google.maps.LatLng(45.5202532568922, -122.674453933711),
  new google.maps.LatLng(45.5202532568922, -122.674453933711),
  new google.maps.LatLng(45.5182538526568, -122.675536333493),
  new google.maps.LatLng(45.5230994518541, -122.674395894751),
  new google.maps.LatLng(45.5230994518541, -122.674395894751),
  new google.maps.LatLng(45.5245253524999, -122.674447072935),
  new google.maps.LatLng(45.5266622364535, -122.67452555432),
  new google.maps.LatLng(45.5266622364535, -122.67452555432),
  new google.maps.LatLng(45.5198599502167, -122.675835831961),
  new google.maps.LatLng(45.5158618026531, -122.678003427534),
  new google.maps.LatLng(45.5230803354538, -122.675405859435),
  new google.maps.LatLng(45.5237940081089, -122.675434901932),
  new google.maps.LatLng(45.5245068646198, -122.675461211841),
  new google.maps.LatLng(45.5221325246918, -122.675774825388),
  new google.maps.LatLng(45.517467754131, -122.678302286303),
  new google.maps.LatLng(45.5343554355119, -122.659621434965),
  new google.maps.LatLng(45.5230617703867, -122.676471505578),
  new google.maps.LatLng(45.5230617703867, -122.676471505578),
  new google.maps.LatLng(45.5230617703867, -122.676471505578),
  new google.maps.LatLng(45.5230617703867, -122.676471505578),
  new google.maps.LatLng(45.5230617703867, -122.676471505578),
  new google.maps.LatLng(45.5237755106803, -122.676449024849),
  new google.maps.LatLng(45.5237755106803, -122.676449024849),
  new google.maps.LatLng(45.5259152693428, -122.676528027589),
  new google.maps.LatLng(45.5273409730046, -122.676580663084),
  new google.maps.LatLng(45.5172237601428, -122.659730097563),
  new google.maps.LatLng(45.5115024238879, -122.659748593259),
  new google.maps.LatLng(45.5210727303648, -122.67751730738),
  new google.maps.LatLng(45.5190733016042, -122.678599602283),
  new google.maps.LatLng(45.5183980534016, -122.678954471562),
  new google.maps.LatLng(45.5164090526247, -122.680048603568),
  new google.maps.LatLng(45.5258766924887, -122.678557872357),
  new google.maps.LatLng(45.5350578489702, -122.656571612793),
  new google.maps.LatLng(45.5225184022491, -122.680071440156),
  new google.maps.LatLng(45.5350545293925, -122.655556960922),
  new google.maps.LatLng(45.5390018180223, -122.655532383109),
  new google.maps.LatLng(45.5236905800676, -122.681141195759),
  new google.maps.LatLng(45.5236905800676, -122.681141195759),
  new google.maps.LatLng(45.5664105990885, -122.653992925322),
  new google.maps.LatLng(45.5207699895399, -122.654633097893),
  new google.maps.LatLng(45.5048581841696, -122.654743221996),
  new google.maps.LatLng(45.5222942574516, -122.682088709806)
  ];
  var heatmap = new google.maps.visualization.HeatmapLayer({
    data: MVCarry
  });
  heatmap.set('radius', 20);
  return heatmap
}
