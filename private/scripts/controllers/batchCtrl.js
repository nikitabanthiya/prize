app.controller('batchCtrl', function ($scope, webService,$window,$http) {

    //variables
    $scope.contacts = [];
    $scope.quotes = [];
    $scope.messages = [];
    $scope.quoteIds = [];
    $scope.keys = [];
    $scope.displayNone = false;
    $scope.activeIndex = 0;
    var token = $window.localStorage.Token;
    //============================================================ functions ===========================================================================================
    $(".l7").addClass("activeMenu");
    //$scope.setHeight();
    $scope.setCurrentUser();
    

    //if ($scope.currentUser.authenticated == false) {
    //    $scope.redirect();
    //}

    $scope.update = function () {

        webService.call('../user/update',
                { "Token": $scope.currentUser.Token, "LastName": $scope.currentUser.LastName, "FirstName": $scope.currentUser.FirstName,
                    "EmailId": $scope.currentUser.EmailId, "Company": $scope.currentUser.Company, "Role": $scope.currentUser.Role, "Location": $scope.currentUser.Location
                },
        function (data) {
            console.log(data);
            $scope.editing = false;
        }
        ,
        function (err) {

        });
    };
    
    $scope.batches=[
	{batch_id:'1',total:'20'},
	];
    
    $scope.users;
    
    $scope.batchList = function() {
    	if($window.localStorage.Token){
	    	 var req = {
	    			 method: 'GET',
	    			 url: 'http://119.9.77.8:3000/api/v1/admin/users',
	    			 headers: {
	    			   'x-access-token': token
	    			 },
	    			}
	    			$http(req).success(function(data){
	    				$scope.users = data;
	    			});
	    	} 
    	$scope.showHideBatchDetails = !$scope.showHideBatchDetails;
    	
    	
    };

});