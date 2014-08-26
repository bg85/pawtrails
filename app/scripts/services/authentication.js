'use strict';

angular.module('pawtrailsApp')
  .service('AuthSrvc', ['$http', 'Session', 'ParseSrvc', function ($http, Session, ParseSrvc) {

    this.signup = function(user)
    {
        return ParseSrvc.signup(user.email, user.firstName, user.lastName, user.password).then(function(result){
          Session.create(result.objectId, user.email, user.firstName, result.sessionToken);
          return result.sessionToken;
        });
    };

    this.isAuthenticated = function () {
      return !!Session.objectId;
    };

    this.isAuthenticated = function () {
      return !!Session.objectId;
    };
}]);