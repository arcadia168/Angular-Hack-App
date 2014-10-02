'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('myEventsAppApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should have no items to start', function () {
    expect(scope.occasions.length).toBe(0);
  });

    it('should add items to the list', function () {
        scope.occasions = 'Test 1';
        scope.addOccasion();
        expect(scope.occasions.length).toBe(1);
    });

    it('should add then remove an item from the list', function () {
        scope.occasion = 'Test 1';
        scope.addOccasion();
        scope.removeOccasion(0);
        expect(scope.occasions.length).toBe(0);
    });
});
