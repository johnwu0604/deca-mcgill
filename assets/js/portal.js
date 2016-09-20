var portalSystem = angular.module('portalSystem', ['ngResource', 'angularMoment', 'ngAnimate']);

portalSystem.controller('portalCtrl', ['$scope', '$resource', '$timeout', function($scope, $resource, $timeout){
	$http.get("http://localhost:1337/event")
	.then(function(response){$scope.events = response.data;});

	$http.get("http://localhost:1337/document")
	.then(function(response){$scope.documents = response.data;});

	$http.get("http://localhost:1337/user")
	.then(function(response){$scope.users = response.data;});
}]);

