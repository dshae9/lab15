var app = angular.module('myModule');


app.controller('NgPalindrome', function($scope, PalindromeFactory){
  $scope.palindromes = [];

  $scope.submit = function(text) {
    if(PalindromeFactory.isPalindrome(text)){
      $scope.result = "This is a Palindrome.";
    } else{
      $scope.result = "This is not a Palindrome.";
    }
  $scope.newItem = "";
}

 
});
