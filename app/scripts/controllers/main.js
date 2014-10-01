'use strict';

/**
 * @ngdoc function
 * @name myEventsAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myEventsAppApp
 */
angular.module('myEventsAppApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
