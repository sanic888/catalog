angular.module('catalog').factory('httpModel', function($http, $q) {
	var apiBaseUrl = '/api';

	var buildUrl = function(url){
		return apiBaseUrl + url;
	};

	var httpModel = {    
		get: function (url) {
			var deferred = $q.defer();
			var self = this;

			$http.get(buildUrl(url)).success(function (data) {
				deferred.resolve(data);
			}).error(function(data, status){
				self.handleErrors(data, status);
				deferred.reject();
			});

			return deferred.promise;
		},

		post: function (url, model) {
			var self = this,
			deferred = $q.defer();

			$http.post(buildUrl(url), model).success(function (data) {
				deferred.resolve(data);
			}).error(function (data, status, headers, config) {
				self.handleErrors(data, status);

				deferred.reject(data);
			});

			return deferred.promise;
		},

		handleErrors: function (data, status) {
			console.log("Server error: %j", data);
		}
	};

	return httpModel;
});