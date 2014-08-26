'use strict';

/**
 * @ngdoc overview
 * @name pawtrailsApp
 * @description
 * # pawtrailsApp
 *
 * Main module of the application.
 */
angular
  .module('pawtrailsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(['$routeProvider', '$locationProvider', '$httpProvider', '$sceDelegateProvider',
    function($routeProvider, $locationProvider, $httpProvider, $sceDelegateProvider) {

      //Enable CORS
      $sceDelegateProvider.resourceUrlWhitelist([
               'self',
               '**']);

      // configure html5 to get links working on jsfiddle
      //$locationProvider.html5Mode(true);

      //Enable cross domain calls
      $httpProvider.defaults.useXDomain = true;

      //Remove the header used to identify ajax call  that would prevent CORS from working
      delete $httpProvider.defaults.headers.common['X-Requested-With'];

      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl',
          access: {
            isFree: true
          }
        })
        .when('/about', {
          templateUrl: 'views/about.html',
          controller: 'AboutCtrl',
          access: {
            isFree: true
          }
        })
        .when('/login', {
          templateUrl: 'views/login.html',
          controller: 'LoginCtrl',
          access: {
            isFree: true
          }
        })
        .when('/signup', {
          templateUrl: 'views/signup.html',
          controller: 'LoginCtrl',
          access: {
            isFree: true
          }
        })
        .otherwise({
          redirectTo: '/'
        });
  }]);
