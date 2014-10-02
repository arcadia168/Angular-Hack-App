'use strict';

/**
 * @ngdoc function
 * @name myEventsAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myEventsAppApp
 */
angular.module('myEventsAppApp')
  .controller('MainCtrl', ['$scope', 'localStorageService', 'clockwork', function ($scope, localStorageService, clockworkService) {
    //var occasionsInStore = localStorageService.get('occasions');

    $scope.occasions = [];//occasionsInStore && occasionsInStore.split('\n') || [];

//    $scope.$watch('occasions', function () {
//        localStorageService.add('occasions', $scope.occasions.join('\n'));
//    }, true);

    //go in and add a 2d array to each occassion here
    $scope.invitees = [];

    //a temporary occasion to get added
    $scope.occasion = {
        name: "",
        dt: "",
        invitees: []
    };

    //a temporary invitee to get added
    $scope.invitee = {
        name: "",
        number: "",
        attending: "NO REPLY"
    };

    $scope.addOccasion = function () {
        //DEBUGGING
        //alert("Occasion being added is " + $scope.occasion);

        //Define a list of invitees on this current occasion
        //Copy the temp list of invitees to this list APPEND/PUSH
        $scope.occasion.invitees = angular.copy($scope.invitees);

        //DEBUGGING
        //alert("The list of temporary invitees is " + $scope.invitees + "\n The list of invitees on the current occasion is now: " + $scope.occasion.invitees);

        //Send out all of the text invites using the service
        // Loop through invitees on the occasion and send message
        for (var i = 0; i < $scope.occasion.invitees.length; i++) {
            $scope.sendMessage($scope.occasion.name, $scope.occasion.dt, $scope.occasion.invitees[i].name, $scope.occasion.invitees[i].number);
        };

        // DEBUGGING
        //alert("The ocassion has the event name: " + $scope.occasion.name + "\n and invitees are: " + $scope.occasion.invitees[0].name + "\n" + $scope.occasion.invitees[1].name);

        //Add the occasion to the list

        // Now has list of invitees and name
        $scope.occasions.push($scope.occasion);

        // Reset the current occasion
        $scope.occasion = '';

        //Reset the temporary list of invitees
        $scope.invitees = [];

        //DEBUGGING
        //alert("Occasion added and temporary occasion and list of invitees has been reset to:" + $scope.ocassion + " and " + $scope.invitees);
    };

    $scope.addInvitee = function () {
        // Set response here
        $scope.invitee.attending = false

        // Add the invitee to the list of invitees
        $scope.invitees.push($scope.invitee)

        //DEBUGGING
        //alert("Invitee " + $scope.invitee.name + " has been added to the current occasion! The current list of invitees is " + $scope.invitees);

        // Reset the invitee
        $scope.invitee = {};
    };

    $scope.removeOccasion = function (index) {
        $scope.occasions.splice(index, 1);
    };

    $scope.sendMessage = function (eventname, eventdate, name, number) {
        // Call the function
        clockworkService.sendMessage(eventname, eventdate, name, number);
    };
  }]);
