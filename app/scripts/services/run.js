'use strict';

angular.module('pawtrailsApp')
.run(['$rootScope', '$location', 'AuthSrvc', function ($rootScope, $location, AuthSrvc) {
  $rootScope.$on('$routeChangeStart', function (event, currRoute)  {
    if (currRoute.access !== undefined && !currRoute.access.isFree && !AuthSrvc.isAuthenticated()) {
        event.preventDefault();
        $location.path('/login');
    }
  });
}]);