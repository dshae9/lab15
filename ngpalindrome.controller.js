var app = angular.module('myModule', []);


app.controller('NgPalindrome', function($scope){
  $scope.palindromes = [];

  $scope.submit = function() {
  $scope.palindromes.push($scope.newItem);
  $scope.newItem = "";
}

});
