'use strict';

/**
 * @ngdoc function
 * @name myEventsAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myEventsAppApp
 */
angular.module('myEventsAppApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
