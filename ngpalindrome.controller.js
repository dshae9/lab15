var app = angular.module('myModule');


app.controller('NgPalindrome', function($scope, PalindromeFactory){
  $scope.palindromes = [];

  $scope.submit = function(text) {
    if(PalindromeFactory.isPalindrome(text)){
      $scope.result = "<h2>This is a Palindrome.</h2>";
    } else{
      $scope.result = "<h2>This is not a Palindrome.</h2>";
    }
  $scope.newItem = "";
}

 
});
