angular.module('catalog').controller("AllProductsCtrl", function ($scope, $state, api) {
	api.getProducts().then(function(data){
		$scope.products = data.products;			
	});

	$scope.showNewForm = function(){
		$state.go('new');
	};

	$scope.showProduct = function(id){
		$state.go('view', {id: id});		
	}
})