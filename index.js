var app = angular.module('myModule', ['ngRoute']);

app.config(function($routeProvider, $locationProvider){
$routeProvider
	.when('/main', {
		templateUrl: 'main/main.html',
	})
	.when('/ngPalindrome', {
		templateUrl: 'ngpalindrome/ngPalindrome.html',
		controller: 'NgPalindrome'
	})
	.when('/reddit', {
		templateUrl: 'view1/view1.html',
		controller: 'RedditCtrl'
	})
	.otherwise({
		redirectTo: '/main'
	});

	$locationProvider.hashPrefix("");
});
