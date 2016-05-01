// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.controller('GalleryCtrl', function($scope, $ionicBackdrop, $ionicModal, $ionicSlideBoxDelegate, $ionicScrollDelegate) {

  $scope.allImages = [{
    src: 'img/rain2.jpg',
    title : 'Natural Mystic',
    }, {
    src: 'img/rain3.jpg',
    title : 'Natural Mystic',
    }, {
    src: 'img/rain4.jpg',
    title : 'Natural Mystic',
    }, {
    src: 'img/sun5.jpg',
    title : 'Natural Mystic',
    }, {
    src: 'img/sun6.jpg',
    title : 'Natural Mystic',
  }];

  $scope.zoomMin = 1;

  $scope.showImages = function(index) {
  $scope.activeSlide = index;

  $scope.showModal('templates/gallery-zoomview.html');
};

$scope.showModal = function(templateUrl) {
  $ionicModal.fromTemplateUrl(templateUrl, {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
    $scope.modal.show();
  });
}

$scope.closeModal = function() {
  $scope.modal.hide();
  $scope.modal.remove()
};

$scope.updateSlideStatus = function(slide) {
  var zoomFactor = $ionicScrollDelegate.$getByHandle('scrollHandle' + slide).getScrollPosition().zoom;
  if (zoomFactor == $scope.zoomMin) {
    $ionicSlideBoxDelegate.enableSlide(true);
  } else {
    $ionicSlideBoxDelegate.enableSlide(false);
  }
};

});
