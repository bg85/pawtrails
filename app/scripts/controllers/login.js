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
    $scope.submitted = false;

    $scope.signup = function()
    {
    	$scope.submitted = true;
    	if (!$scope.signupForm.$invalid)
    	{
    		return true;
    	}

    	return false;
    };
  });