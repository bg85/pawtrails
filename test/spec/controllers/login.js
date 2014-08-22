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

  it('should mark the form as submitted for signup', function () {
    expect(scope.submittedSign).toBeFalsy();
    scope.signupForm.$invalid = true;
    scope.signup();
    expect(scope.submittedSign).toBeTruthy();
  });

  it('should mark the form as submitted for loggin', function () {
    expect(scope.submittedLogin).toBeFalsy();
    scope.signupForm.$invalid = true;
    scope.login();
    expect(scope.submittedLogin).toBeTruthy();
  });  
});
