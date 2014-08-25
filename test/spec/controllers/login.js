'use strict';

describe('Controller: LoginCtrl', function () {

  // load the controller's module
  beforeEach(module('pawtrailsApp'));

  var LoginCtrl, scope, ParseSrvc;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $q) {
    scope = $rootScope.$new();
    scope.signupForm = {
    'user' : {
        'email': 'email',
        'password': 'something'
        }
    };
    scope.loginForm = {
    'user' : {
        'email': 'email',
        'password': 'something'
        }
    };

    ParseSrvc = {
      signup: function (email, firstName, lastName, password) {
          email = ''; firstName = ''; lastName = ''; password = '';
          var deferred = $q.defer();
          var data = {createdAt:'2014-08-25T14:07:35.670Z',objectId:'2WrnJinaEN',sessionToken:'TShoveIqQvaNvSPb6O00BbuMr'};
          deferred.resolve(data);
          return deferred.promise; 
      }
    };

    LoginCtrl = $controller('LoginCtrl', {
      $scope: scope,
      ParseSrvc: ParseSrvc
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
    scope.loginForm.$invalid = true;
    scope.login();
    expect(scope.submittedLogin).toBeTruthy();
  });  

  it('should mark the form as submitted for signup', function () {
    expect(scope.submittedSign).toBeFalsy();
    scope.signupForm.$invalid = true;
    scope.signup();
    expect(scope.submittedSign).toBeTruthy();
  });

  it('should unmark the form as submitted for signup', function () {
    expect(scope.submittedSign).toBeFalsy();
    scope.signupForm.$invalid = false;
    scope.signup();
    expect(scope.submittedSign).toBeFalsy();
  });

  it('should save session for user if signup is succesful', function() {

  });
});
