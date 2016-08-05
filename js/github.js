var apiKey = require('./../.env').apiKey;

function Github() {

}

Github.prototype.getRepos = function(name, displayFunction){
  $.get('https://api.github.com/users/' + name + '/repos?access_token=' + apiKey).then(function(response){
    console.log(response);
    displayFunction(name, response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

Github.prototype.getUser = function(name, displayFunction) {
  $.get('https://api.github.com/users/' + name + '?access_token=' + apiKey).then(function(response) {
    displayFunction(name, response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
}

Github.prototype.getFollowers = function(name, displayFunction) {
  $.get('https://api.github.com/users/' + name + '/followers?access_token=' + apiKey).then(function(response) {
    displayFunction(name, response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
}

Github.prototype.getFollowing = function(name, displayFunction) {
  $.get('https://api.github.com/users/' + name + '/following?access_token=' + apiKey).then(function(response) {
    displayFunction(name, response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
}

exports.githubModule = Github;
