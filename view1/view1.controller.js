var app = angular.module ('myModule');

app.controller('RedditCtrl', function($scope, $timeout, RedditFactory){

  RedditFactory.getPosts()
  .then(function(result){
    $timeout($scope.posts = result);
  })
  .catch(function(error){
    $scope.error = 'there was an error getting posts';
  });
});
