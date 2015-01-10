'use strict';

// The RegisterController is responsible for the "Login" screen
app.controller('RegisterController',
    function ($scope, $rootScope, $location, townsService, authService, notifyService) {
    	$rootScope.pageTitle = 'Register';
        $scope.userData = {townId: null};
        //Load towns for dropdown menu
        $scope.towns = townsService.getTowns();

        $scope.register = function (userData) {
        	authService.register(userData,
		        	function success () {
		        		notifyService.showInfo("User registered successfully");
		        		$location.path("/");
		        	},
		        	function error (error) {
		        		notifyService.showError("User registration failed", error);
		        	}
	        );
	    };
    }
);
