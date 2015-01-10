'use strict';

// The ChangeUserPasswordController is responsible for the "Login" screen
app.controller('UserChangePasswordController',
    function ($scope, $rootScope, $location, userService, authService, notifyService) {
    	$rootScope.pageTitle = 'ChangeUserPassword';

        $scope.changeUserPassword = function (userData) {
        	userService.changeUserPassword(userData,
		        	function success () {
		        		notifyService.showInfo("User updated successfull");
		        		$location.path("/");
		        	},
		        	function error (error) {
		        		notifyService.showError("User update failed", error);
		        	}
	        );
	    };
    }
);
