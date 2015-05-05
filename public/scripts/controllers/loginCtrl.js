
app.controller("loginCtrl", function ($scope, $location, $window,$http) {

    //variables
    $scope.user = { "Username": "", "Password": "" };
    $scope.invalid = false;

    //===================================== functions =================================

    if ($scope.currentUser.authenticated == true || $scope.currentUser.authenticated == "true") {
        $scope.redirect(1);
    }

    //setting current page as login page in applicationCtrl
    $scope.setCurrentPage(true);

    // login function
    $scope.login = function (valid, user) {
    	
    	 var url_post = "http://119.9.77.8:3000/login";
    	  var req = {
	  			 method: 'POST',
	  			 url: url_post,
	  			 data:{
	  	                "username": user.Username,
	  	                "password": user.Password
	  	                }
	  			}
	       		$http(req).success(function(data){
	       			alert(data);
	  			$window.localStorage.Token=data;
	  			console.log($window.localStorage.Token);
	  			$window.location.href = "http://localhost/prizeCoupon/freakoupon/private/#/";
               
	  			}).error(function(data) {
	  				alert(data.message);
	  			  });
        
    };
    $scope.facebook = function (){
    	var Facebook = require('facebook-node-sdk');

    	var facebook = new Facebook({ appID: '1597442140499820', secret: '52814e39dbf87488950012f50ef35b0f' });

    	facebook.api('/amachang', function(err, data) {
    	  console.log(data); // => { id: ... }
    	});
    }

    //forgot password 
    $scope.forgotPassword = function () {
        $location.path("/recoverPassword");
        $location.replace();
    };

});