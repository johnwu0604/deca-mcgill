var app = angular.module('dashboardApp', ['ngResource', 'angularMoment', 'ngAnimate']);

app.controller('feedCtrl', ['$scope', '$resource', '$timeout', function($scope, $resource, $timeout){
	$scope.feedEntries = $resource('/feed').query();
	$scope.feed1 = true;
	$scope.feed2 = false;
	io.socket.get('/feed/subscribe', function(data,jwr){
		io.socket.on('new_entry', function(entry){
			$timeout(function(){
				$scope.feedEntries.unshift(entry);
			});
		});
	});
	$scope.tab1 = function()
	{
		$scope.feed1 = true;
		$scope.feed2 = false;
	}
	$scope.tab2 = function()
	{
		$scope.feed1 = false;
		$scope.feed2 = true;
	}
}]);