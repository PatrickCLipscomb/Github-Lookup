var apiKey = require('./../.env').apiKey;


Search.prototype.bikesStolen = function(zip, radius, displayStolen) {
  $.get('https://bikeindex.org:443/api/v2/bikes_search/stolen?page=1&per_page=25&proximity= '+ zip +'&proximity_square=' + radius).then( function(response) {
    displayStolen(zip, radius, response);
  }).fail(function(error) {
    $('#showResults').text(error.responseJSON.message);
  });
};
