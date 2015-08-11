angular.module('catalog').controller("NewProductCtrl", function ($scope, $state, api) {
	$scope.save = function(){
		api.addProduct($scope.name, $scope.desc, $scope.price).then(function(){
			$state.go('all');
		});
	};

	$scope.cancel = function(){
		$state.go('all');
	};
})