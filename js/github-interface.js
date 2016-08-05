var Github = require('./../js/github.js').githubModule;

var repoFunction = function(name, response) {
  $('#clear').show()
  $('#showUser').show()
  $('#imgUser').show()
  $('.followers').show()
  response.forEach(function(repo) {
    var repoArry = repo.full_name.split('/')
    var repoName = repoArry[1]
    var Created_at = repo.created_at.slice(0, 10)
    $('.repositories').append('<li><h4><a href="' + repo.html_url + '">' + repoName + '</a></h4><p>Created on: ' + Created_at + '</p></li>');
  })
  $('#showRepos').text(response.login);
};

var userFunction = function(name, response) {
  var created_at = response.created_at.slice(0, 10)
  $('#showUser').html("User: " + response.login + " <> Created: " + created_at);
  $('.showUserforFollowers').html(response.login)
  $('#imgUser').html("<img src=" + response.avatar_url + " />");
}

var followersFunction = function(name, response) {
  response.forEach(function(follower) {
    $('#followers').append('<li><h5><a href="' + follower.url + '">' + follower.login + '</a></h5>')
  })
}

var followingFunction = function(name, response) {
  response.forEach(function(following) {
    $('#following').append('<li><h5><a href="' + following.url + '">' + following.login + '</a></h5>')
  })
}

$(document).ready(function() {
  $('#clear').hide()
  $('#showUser').hide()
  $('#imgUser').hide()
  $('.followers').hide()
  var currentGithub = new Github();
  $('#username-form').submit(function(event) {
    event.preventDefault();
    var username = $('#username').val();
    currentGithub.getUser(username, userFunction);
    currentGithub.getRepos(username, repoFunction);
    currentGithub.getFollowers(username, followersFunction);
    currentGithub.getFollowing(username, followingFunction);
  });
  $('#clear').click(function() {
    $('.repositories').empty()
    $('#followers').empty()
    $('#following').empty()
    $('#clear').hide()
    $('#showUser').hide()
    $('#imgUser').hide()
    $('.followers').hide()
  })
});
