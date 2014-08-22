'use strict';

angular.module('pawtrailsApp')
  .service('ParseSrvc', function () {
  		this.signup = function () {

  		};
  });

// function ApiWrapper() {
// 	this.signup = function (User user)
// 	{
// 		alert('I am here');
// 		$.ajax({
// 		    url: 'https://api.parse.com/1/users',
// 		    type: 'post',
// 		    data: {
// 		        username: user.email,
//        			password: user.password
// 		    },
// 		    headers: {
// 		       'X-Parse-Application-Id': 'bomAYmLa42iSFGlIcftlWSGZvZVuOcRqg1TrTdl0',
// 		       'X-Parse-REST-API-Key': 'qkzNVD7IO1Ovy4LsQxiGYCqdA2zdBofopxTCTbZv',
// 		       'Content-Type': 'application/json'
// 		    },
// 		    dataType: 'json',
// 		    success: function (data) {
// 		        console.info(data);
// 		    }
// 		});
// 	}
// }
