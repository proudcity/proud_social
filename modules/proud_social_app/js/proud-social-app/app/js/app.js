'use strict';

//***************************************

// Main Application

//***************************************

angular.module('socialAppParent', [
  'socialApp',
  'angular-lazycompile',
  'angular-inview'
])

.controller('ParentCntrl', ['$scope', function($scope){
  $scope.socialCode = $scope.socialCode || '<div social-wall></div>';
  $scope.socialCompile = false;
  // Render social directive lazily
  $scope.showSocial = function($event, $inview, $inviewpart) {
    $scope.socialCompile = $scope.socialCode;
  }
}])