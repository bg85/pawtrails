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
  .controller('LoginCtrl', ['$scope', 'ParseSrvc', function ($scope, ParseSrvc) {
    $scope.user = new User();
    $scope.submittedSign = false;
    $scope.submittedLogin = false;

    $scope.signup = function()
    {
    	$scope.submittedSign = true;
    	if (!$scope.signupForm.$invalid)
    	{
            $scope.submittedSign = false;
            ParseSrvc.signup($scope.user.email, $scope.user.firstName, $scope.user.lastName, $scope.user.password).then(function(result){
                if (result !== null && result.sessionToken !== null) {
                    //Set session token and redirect to login
                    //scope.$apply(function() { $location.path("/dashboard"); });
                }
                else
                {
                    //Show error message
                }
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