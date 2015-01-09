'use strict';

// The LoginController is responsible for the "Login" screen
app.controller('LoginController',
    function ($scope, $location, authService, notifyService) {
    	$scope.login = function (userData) {
    		authService.login(userData,
    			function  success() {
    				notifyService.showInfo("Login successful");
    				$location.path("/");
    			},
    			function error (error) {
    				notifyService.showError("Username or password is wrong", error);
    			}
    		);
    	}
    }
);
