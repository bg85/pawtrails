'use strict';

describe('Controller: LoginCtrl', function () {

  // load the controller's module
  beforeEach(module('pawtrailsApp'));

  var LoginCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    scope.signupForm = {
    'user' : {
        'email': 'email',
        'password': 'something'
        }
    };

    LoginCtrl = $controller('LoginCtrl', {
      $scope: scope
    });
  }));

  it('should return success for signing up', function () {
    var result = scope.signup();
    expect(result).toBeTruthy();
  });

  it('should mark the form as submitted', function () {
    expect(scope.submitted).toBeFalsy();
    scope.signupForm.$invalid = true;
    scope.signup();
    expect(scope.submitted).toBeTruthy();
  });
});
