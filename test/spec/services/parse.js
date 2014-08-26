'use strict';

describe('Service: ParseSrvc', function () {

  var ParseSrvc, httpBackend;

  // load the controller's module
  beforeEach(module('pawtrailsApp'));

  beforeEach(inject(function (_ParseSrvc_, $httpBackend) {
    ParseSrvc = _ParseSrvc_;
    httpBackend = $httpBackend;
  }));

  it('should create a new account for users on signup', function () {
  	httpBackend.whenPOST('https://api.parse.com/1/users/').respond({
        'createdAt':'2014-08-25T14:07:35.670Z','objectId':'2WrnJinaEN','sessionToken':'TShoveIqQvaNvSPb6O00BbuMr'
    });

    var email = 'test@email.com';
    var firstName = 'adrian';
    var lastName = 'gonzalez';
    var password = '123';

    ParseSrvc.signup(email, firstName, lastName, password).then(function(result) {
      expect(result.sessionToken).toBe('TShoveIqQvaNvSPb6O00BbuMr');
    });
    httpBackend.flush();
  });
});