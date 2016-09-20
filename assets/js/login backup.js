var loginSystem = angular.module('loginSystem', []);

loginSystem.controller('signupCtrl', function($scope, $resource, $timeout){
	$scope.firstName = "";
	$scope.lastName = "";
	$scope.phoneNumber = "";
	$scope.faculty = "";
	$scope.email = "";
	$scope.password = "";
	$scope.password2 = "";

	$scope.passwordMatch=false;

	$scope.user={email : $scope.email,
				 password : $scope.password,
				 firstName : $scope.firstName,
				 lastName : $scope.lastName,
				 faculty : $scope.faculty,
				 phoneNumber : $scope.phoneNumber};

	$scope.addUser = function() {
		if($scope.password===$scope.password2)
		{
			$http({
			method : 'POST',
			url : "http://localhost:1337/user",
			data : $scope.user
			})
			.success(function(data){
			});
		}
	}

});

