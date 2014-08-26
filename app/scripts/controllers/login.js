'use strict';

/**
 * @ngdoc function
 * @name pawtrailsApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the pawtrailsApp
 */

function User () {
	this.email = '';
	this.firstName = '';
	this.lastName = '';
	this.password = '';
	this.passwordVerify = '';
}

angular.module('pawtrailsApp')
  .controller('LoginCtrl', ['$scope', '$rootScope', '$location','AuthSrvc', function ($scope, $rootScope, $location, AuthSrvc) {
    $scope.user = new User();
    $scope.submittedSign = false;
    $scope.submittedLogin = false;

    $scope.signup = function()
    {
    	$scope.submittedSign = true;
    	if (!$scope.signupForm.$invalid)
    	{
            $scope.submittedSign = false;
            AuthSrvc.signup($scope.user).then(function (result) {
              if (result !== null) {
                  $location.path('/dashboard');
              }
            }, function () {
              //show error message
            });
    	}
    };

    $scope.login = function()
    {
        $scope.submittedLogin = true;
        if (!$scope.loginForm.$invalid)
        {
            $scope.submittedLogin = false;
        }
    };
  }]);