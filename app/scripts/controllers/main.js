'use strict';

/**
 * @ngdoc function
 * @name pawtrailsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pawtrailsApp
 */
angular.module('pawtrailsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
