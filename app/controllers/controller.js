/*Global: app*/

'use strict';

//Controladores
//var app = angular.module('app', []);

app.controller('MainCtrl', ['$scope', '$location', '$http',
	function MainCtrl($scope, $location, $http){
		// console.log('enter in Main');
		$scope.message = "Hello World";
	}]
);


app.controller('ShowCtrl', ['$scope', '$location', '$http',
	function ShowCtrl($scope, $location, $http){		
		$scope.message = "Show The World";
	}]
);

app.controller('CustomerCtrl', ['$scope', '$location', '$http',
	function CustomerCtrl($scope, $location, $http){

		$scope.custumerName = "Bob's Burgers";
		$scope.customerNumber = 44522; 

		$scope.changeCustumer = function(){
			$scope.custumerName 	= $scope.cName;
			$scope.customerNumber	= $scope.cNumber;
		};
	}]
);

/*
var addoncsController = angular.module('addonsController', []);

addoncsController.controller('addonsCtrl', ['$scope', '$location', '$http',
	function addonsCtrl($scope, $location, $http){
		$scope.customerName = "Bob's Burgers";
	}]
);
*/