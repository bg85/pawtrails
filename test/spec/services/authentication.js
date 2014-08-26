'use strict';

describe('Service: AuthSrvc', function () {

  var AuthSrvc, ParseSrvc;

  // load the controller's module
  beforeEach(module('pawtrailsApp'));

  beforeEach(inject(function (_AuthSrvc_, $q) {
    AuthSrvc = _AuthSrvc_;

    ParseSrvc = {
      signup: function (email, firstName, lastName, password) {
          email = ''; firstName = ''; lastName = ''; password = ''; 
          var deferred = $q.defer();
          var data = {createdAt:'2014-08-25T14:07:35.670Z',objectId:'2WrnJinaEN',sessionToken:'TShoveIqQvaNvSPb6O00BbuMr'};
          deferred.resolve(data);
          return deferred.promise; 
      }
    };

  }));

  it('should create a new account for users on signup', function () {
  	
    var email = 'test@email.com';
    var firstName = 'adrian';
    var lastName = 'gonzalez';
    var password = '123';

    //alert('before');
    AuthSrvc.signup(email, firstName, lastName, password).then(function(result) {
      //alert('result');
      expect(result.sessionToken).toBe('TShoveIqQvaNvSPb6O00BbuMr'); //It is never getting here
    });
  });
});