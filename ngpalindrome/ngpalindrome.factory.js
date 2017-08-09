var app = angular.module('myModule');

app.factory('PalindromeFactory', function(){
	return {
		isPalindrome: isPalindrome
	};

	function isPalindrome(pal){
		var lowerPal = pal.toLowerCase().replace(/\W/g, '');
		var palReverse = lowerPal.split('').reverse().join("");
		return palReverse === lowerPal;
	}
}); 
