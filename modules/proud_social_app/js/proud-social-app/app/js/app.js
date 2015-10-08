'use strict';

//***************************************

// Main Application

//***************************************

angular.module('socialApp', [
  'socialApp.social',
  'ngResource',
  'ngSanitize',
  'iso.directives'
])

.run(
  [          '$rootScope', '$window', 
    function ($rootScope,   $window) {

      // It's very handy to add references to $state and $stateParams to the $rootScope
      $rootScope.socialApi = _.get(Drupal, 'settings.social_wall.socialApi') || 'http://45.55.8.62:8080/api/';
    }
  ]
);

