'use strict';

describe('Service: AuthSrvc', function () {

  var AuthSrvc, ParseSrvcMock, deferred, rootScope;

  // load the controller's module
  beforeEach(function() {
    module('pawtrailsApp', function($provide){
      ParseSrvcMock = {
        signup: function (email, firstName, lastName, password) {
            email = ''; firstName = ''; lastName = ''; password = ''; 
            return deferred.promise; 
        }
      };

      $provide.value('ParseSrvc', ParseSrvcMock);
    });

    inject(function (_AuthSrvc_, _$q_, _$rootScope_) {
      deferred = _$q_.defer();
      AuthSrvc = _AuthSrvc_;
      rootScope = _$rootScope_;

      var data = {createdAt:'2014-08-25T14:07:35.670Z',objectId:'2WrnJinaEN',sessionToken:'TShoveIqQvaNvSPb6O00BbuMr'};
      deferred.resolve(data);
    });
  });

  it('should create a new account for users on signup', function () {
    var email = 'test@email.com';
    var firstName = 'adrian';
    var lastName = 'gonzalez';
    var password = '123';

    AuthSrvc.signup(email, firstName, lastName, password).then(function(result) {
      expect(result).toBe('TShoveIqQvaNvSPb6O00BbuMr'); //It is never getting here
    });

    rootScope.$apply();
  });
});