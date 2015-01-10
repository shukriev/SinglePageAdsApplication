'use strict';

app.controller('UserPublishNewAdController',
  function ($scope, $rootScope, $location, townsService, categoriesService, userService, notifyService) {

      $rootScope.pageTitle = "Add new Ad";
      $scope.adData = {townId: null, categoryId: null};
      $scope.categories = categoriesService.getCategories();
      $scope.towns = townsService.getTowns();

      $scope.publishAd = function(adData) {
          userService.createNewAd(adData,
              function success() {
                  notifyService.showInfo("Ad is published successful");
                  $location.path("/user/ads");
              },
              function error(error) {
                  notifyService.showError("Can't publish this ad because ", error);
              }
          );
      };
      $scope.fileSelected = function(fileInputField) {
        delete $scope.adData.imageDataUrl;
        var file = fileInputField.files[0];
        if (file.type.match(/image\/.*/)) {
            var reader = new FileReader();
            reader.onload = function() {
                $scope.adData.imageDataUrl = reader.result;
                $(".image-box").html("<img src='" + reader.result + "'>");
            };
            reader.readAsDataURL(file);
        } else {
            $(".image-box").html("<p>File type not supported!</p>");
        }
    };

  }
);
