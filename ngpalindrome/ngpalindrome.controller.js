var app = angular.module('myModule');


app.controller('NgPalindrome', function($scope, PalindromeFactory){
  $scope.palindromes = [];

  $scope.submit = function(text) {
    if(PalindromeFactory.isPalindrome(text)){
      $scope.result = $scope.newItem + " This is a Palindrome.";
    } else{
      $scope.result = $scope.newItem + " This is not a Palindrome.";
    }
  $scope.newItem = "";

}


});
