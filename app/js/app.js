'use strict';

var app = angular.module('app', ['ngRoute', 'ngResource', 'ui.bootstrap.pagination']);

app.constant('baseServiceUrl', 'http://softuni-ads.azurewebsites.net');
app.constant('pageSize', 7);

app.config(function ($routeProvider) {

    $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    });

    $routeProvider.when('/login', {
        templateUrl: 'templates/login.html',
        controller: 'LoginController'
    });

    $routeProvider.when('/register', {
        templateUrl: 'templates/register.html',
        controller: 'RegisterController'
    });

    $routeProvider.when('/user/ads/publish', {
        templateUrl: 'templates/user/publish-new-ad.html',
        controller: 'UserPublishNewAdController'
    });

    $routeProvider.when('/user/ads', {
        templateUrl: 'templates/user/user-ads.html',
        controller: 'UserAdsController'
    });
    
    $routeProvider.when('/user/profile', {
        templateUrl: 'templates/user/edit-user-profile.html',
        controller: 'UserProfileController'
    });

    $routeProvider.when('/user/ads/delete/:id', {
        templateUrl: 'templates/user/delete-user-ad.html',
        controller: 'UserDeleteAdController'
    });

    $routeProvider.when('/user/ads/edit/:id', {
        templateUrl: 'templates/user/edit-user-ad.html',
        controller: 'UserEditAdController'
    });

    $routeProvider.when('/user/ads/changePassword/', {
        templateUrl: 'templates/user/change-user-password.html',
        controller: 'UserChangePasswordController'
    });

    $routeProvider.when('/user/ads/filter/:status', {
        templateUrl: 'templates/user/filter-user-ads.html',
        controller: 'UserAdsFilterController'
    });

    $routeProvider.otherwise(
        { redirectTo: '/' }
    );
});


app.run(function ($rootScope, $location, authService) {
    $rootScope.$on('$locationChangeStart', function (event){
        if ($location.path().indexOf('/user/') != -1 && !authService.isLoggedIn()) {
            $location.path('/');
        };
    });
});
