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
  .controller('LoginCtrl', function ($scope) {
    $scope.user = new User();
    $scope.submittedSign = false;
    $scope.submittedLogin = false;

    $scope.signup = function()
    {
    	$scope.submittedSign = true;
    	if (!$scope.signupForm.$invalid)
    	{
            $scope.submittedSign = false;
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
  });