angular.module('catalog').controller("ViewProductCtrl", function ($scope, $state, $stateParams, api) {
	api.getProduct($stateParams.id).then(function(data){
		if(data.success && data.product){
			$scope.product = data.product;
			$scope.product.comments = $scope.product.comments.sort(function compare(a, b) {
				if (a.createdOn < b.createdOn){
					return 1;
				}
				if (a.createdOn > b.createdOn){
					return -1;
				}
				return 0;
			});
		}else {
			$state.go('all');
		}
	});

	$scope.addComment = function(){
		api.addComment($stateParams.id, $scope.comment);
		$scope.product.comments.unshift({text: $scope.comment, createdOn: new Date});
		$scope.comment = '';
	};
})