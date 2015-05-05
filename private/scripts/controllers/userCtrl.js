
app.controller("userCtrl", function ($scope,$window,$http,ngTableParams,$filter,$q) {

    //variables
    $scope.contacts = [];
    $scope.quotes = [];
    $scope.messages = [];
    $scope.quoteIds = [];
    $scope.keys = [];
    $scope.displayNone = false;
    $scope.activeIndex = 0;
    var token = $window.localStorage.Token;
    $scope.flag = {vipYes: 0};
    $scope.flag = {vipNo: 0};
    $scope.flag = {male: 0};
    $scope.flag = {female: 0};
    $scope.flag = {update: false};
    var token = $window.localStorage.Token;
    //============================================================ functions ===========================================================================================
    $(".l4").addClass("activeMenu");
    //$scope.setHeight();
    $scope.setCurrentUser();
   
    //if ($scope.currentUser.authenticated == false) {
    //    $scope.redirect();
    //}
    
    $scope.activeStatus = [
                           {id: '1',  name: 'Active'},
                           {id: '2', name: 'Suspend'},
                           {id: '3', name: 'Soft Delete'},
                           {id: '4', name: 'Hard Delete'},
                        ]; 
       $scope.astatus = {"1": "Active",
                          "2":"Suspend",
                          "3":"Soft Delete",
                          "4":"Hard Delete"};
    $scope.setCurrentUser();
    
    $scope.createuser = function() {
       $scope.showHideCreateUsers = !$scope.showHideCreateUsers;
     };
    $scope.saveUser =function(){
    	alert($scope.user.id);
    	  var url = "http://119.9.77.8:3000/api/v1/admin/user/" + $scope.user.id;
  	      var req = {
  	  			 method: 'PUT',
  	  			 url: url,
  	  			 headers: {
  	  			   'x-access-token': token,
  	  			 'Content-Type' : 'application/json'
  	  			 },
  	  			 data: { 
  	  				 "name"					: $scope.user.name,
  	  				 "email"				: $scope.user.email,
  	  				 "pin_code"				: $scope.user.pin_code,
  	  				 "dob"					: $scope.user.dob,
  	  				 "state"				: $scope.user.state,
  	  				 "gender"				: $scope.user.gender,
  	  				 "contact"				: $scope.user.contact,
  	  				 "reffer_by"			: $scope.user.reffer_by,
  	  				 "reffer_id"			: $scope.user.reffer_id,
  	  				 "vip_status"			: $scope.user.vip_status,
  	  				 "vip_expiration"		: $scope.user.vip_expiration,
  	  				 "current_score"		: $scope.user.current_score,
  	  				 "point_gained"			: $scope.user.point_gained,
  	  				 "rank"					: $scope.user.rank,
  	  				 "registration_score"	: $scope.user.registration_score,
  	  				 "active_status"		: $scope.user.active_status,
  	  				 "comments"				: $scope.user.comments
  	               
  	  	                }
  	  			}
  	       			
  	       			$http(req).success(function(data){
  	  				
  	  			});
  			}
      
       $scope.saveOrCreateUser = function(valid,user){
    	 
      		$scope.showHideCreateUsers = !$scope.showHideCreateUsers;
      	       var url = "http://119.9.77.8:3000/api/v1/admin/user";
      	       var req = {
      	  			 method: 'POST',
      	  			 url: url,
      	  			 headers: {
      	  			   'x-access-token': token,
      	  			 'Content-Type' : 'application/json'
      	  			 },
      	  			 data: { 	 "name"					: $scope.user.username,
			  	  				 "email"				: $scope.user.batch_id,
			  	  				 "pin_code"				: $scope.user.vip,
			  	  				 "dob"					: $scope.user.dob,
			  	  				 "state"				: $scope.user.state,
			  	  				 "gender"				: $scope.user.gender,
			  	  				 "contact"				: $scope.user.contact,
			  	  				 "reffer_by"			: $scope.user.reffer_by,
			  	  				 "reffer_id"			: $scope.user.reffer_id,
			  	  				 "vip_status"			: $scope.user.vip_status,
			  	  				 "vip_expiration"		: $scope.user.vip_expiration,
			  	  				 "current_score"		: $scope.user.current_score,
			  	  				 "point_gained"			: $scope.user.point_gained,
			  	  				 "rank"					: $scope.user.rank,
			  	  				 "u.registration_score"	: $scope.user.registration_score,
			  	  				 "active_status"		: $scope.user.active_status,
			  	  				 "comments"				: $scope.user.comments
      	  	               
      	  	                }
      	  			}
      	       		$http(req).success(function(data){
      	       			$scope.users.push({ 
      	       				 "name"					: $scope.user.username,
      	  	  				 "email"				: $scope.user.batch_id,
      	  	  				 "pin_code"				: $scope.user.vip,
      	  	  				 "dob"					: $scope.user.dob,
      	  	  				 "state"				: $scope.user.state,
      	  	  				 "gender"				: $scope.user.gender,
      	  	  				 "contact"				: $scope.user.contact,
      	  	  				 "reffer_by"			: $scope.user.reffer_by,
      	  	  				 "reffer_id"			: $scope.user.reffer_id,
      	  	  				 "vip_status"			: $scope.user.vip_status,
      	  	  				 "vip_expiration"		: $scope.user.vip_expiration,
      	  	  				 "current_score"		: $scope.user.current_score,
      	  	  				 "point_gained"			: $scope.user.point_gained,
      	  	  				 "rank"					: $scope.user.rank,
      	  	  				 "u.registration_score"	: $scope.user.registration_score,
      	  	  				 "active_status"		: $scope.user.active_status,
      	  	  				 "comments"				: $scope.user.comments});
      	       		 
      	  			});
    	   
        };
      
 
       $scope.deleteUser = function(index,id){
      	  var url = "http://119.9.77.8:3000/api/v1/admin/user/" + id;
           var req = {
      			 method: 'DELETE',
      			 url: url,
      			 headers: {
      			   'x-access-token': token,
      			 'Content-Type' : 'application/json'
      			 }}
      			$http(req).success(function(data){
      				var index = -1;		
     		 		var comArr = eval( $scope.users );
     		 		for( var i = 0; i < comArr.length; i++ ) {
     		 			if( comArr[i].id === id ) {
     		 				index = i;
     		 				break;
     		 			}
     		 		}
     		 		if( index === -1 ) {
     		 			alert( "Something gone wrong" );
     		 		}
     		 		$scope.users.splice( index, 1 );		
     		 	
      			});
         };
       
      /* $scope.editUser = function (index,u,id) {
    		   if(u.vip == 1){
    		   $scope.flag.vipYes =1;
    		   $scope.flag.vipNo =0;
    	   }else{
    		   $scope.flag.vipYes =0;
    		   $scope.flag.vipNo =1;
    	   }
    	   if(u.gender == 0){
    		   $scope.flag.male =1;
    		   $scope.flag.female =0;
    	   }else{
    		   $scope.flag.male =0;
    		   $scope.flag.female =1;
    	   }
    	   
      	 $scope.flag.update = true;
      	 $scope.user = u;
      	 $scope.showHideCreateUsers = !$scope.showHideCreateUsers;
      	 $scope.test=!$scope.attched = "";
      	 $scopr ="check .";
      	 $scope.editUser ="checking a testgain";
      	 $git command
      	 $sciope.deleteUser ="delete git bit delket";
      	}*/
       
    $scope.fetchUser = function(){
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
    	 };
    $scope.editId = -1;
          $scope.setEditId =  function(u,id) {
        	  $scope.editId = id;
              $scope.user = u;
           }
          
     $scope.cancel = function(){
          	$window.location.reload();
          }
          $scope.fetchUser();
         
             
});


