'use strict';

angular.module('pawtrailsApp')
.service('Session', function () {
  
  this.create = function (sessionId, email, firstName, sessionToken) {
    this.id = sessionId;
    this.email = email;
    this.firstName = firstName;
    this.sessionToken = sessionToken;
  };

  this.destroy = function () {
    this.id = null;
    this.email = null;
    this.firstName = null;
    this.sessionToken = null;
  };

  return this;

});