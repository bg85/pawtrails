'use strict';

angular.module('pawtrailsApp')
  .service('ParseSrvc', ['$http', '$q', function ($http, $q) {
  		this.signup = function (email, firstName, lastName, password) {

  			var deferred = $q.defer();

			var data = angular.toJson( { username  :email,
						 password  :password,
						 firstName :firstName,
						 lastName  :lastName
					   } );

			var url = 'https://api.parse.com/1/users/';

			var headers = {'X-Parse-Application-Id': 'bomAYmLa42iSFGlIcftlWSGZvZVuOcRqg1TrTdl0',
						  'X-Parse-REST-API-Key': 'qkzNVD7IO1Ovy4LsQxiGYCqdA2zdBofopxTCTbZv',
						  'Content-Type': 'application/json'
						 };

			$http({
	            method: 'POST',
	            url: url,
	            headers: headers,
	            data: data
	        }).success(function (data) {
	            deferred.resolve(data);
	        }).error(function (err) {
	            deferred.reject(err);
	        });
	        
	        return deferred.promise;
  		};
  }]);
