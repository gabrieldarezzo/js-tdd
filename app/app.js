'use strict';
var app = angular.module('app', [
	 'ngRoute'	
]);

app.config(['$routeProvider', '$locationProvider',
	function($routeProvider, $locationProvider){
		//console.log($routeProvider, $locatioProvider);
		
		$routeProvider.
		when('/', {
			 templateUrl: 'partials/main.html'
			,controller: 'MainCtrl'
		}).when('/show', {
		 	 templateUrl: 'partials/show.html'
			,controller: 'ShowCtrl'	
		}).when('/custumer', {
		 	 templateUrl: 'partials/custumer.html'
			,controller: 'CustomerCtrl'	
		});


		$locationProvider.html5Mode(false).hashPrefix('!');
		
	}
]);