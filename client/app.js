angular.module('catalog', ['ui.router']);

angular.module('catalog').config(function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
    //disable IE ajax request caching
    if (!$httpProvider.defaults.headers.get) {
        $httpProvider.defaults.headers.get = {};    
    }
    $httpProvider.defaults.headers.get['If-Modified-Since'] = '0';
    
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

    $stateProvider
        .state('all', {
            url: '/',
            templateUrl: '/views/all/all.html',
            controller: "AllProductsCtrl",
        })
        .state('new', {
            url: '/new',
            templateUrl: '/views/new/new.html',
            controller: "NewProductCtrl",
        })
        .state('view', {
            url: '/view/:id',
            templateUrl: '/views/view/view.html',
            controller: "ViewProductCtrl",
        });

    $urlRouterProvider.otherwise('/');
});

angular.module('catalog').controller("AppCtrl", function () {
});
