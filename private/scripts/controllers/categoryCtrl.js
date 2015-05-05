
app.controller("categoryCtrl", function ($scope,$window,$http) {

    //variables
    $scope.contacts = [];
    $scope.quotes = [];
    $scope.messages = [];
    $scope.quoteIds = [];
    $scope.keys = [];
    $scope.displayNone = false;
    $scope.activeIndex = 0;
    $scope.flag = {update: false};
    var token = $window.localStorage.Token;
    //============================================================ functions ===========================================================================================
    $(".l4").addClass("activeMenu");
    //$scope.setHeight();
    $scope.setCurrentUser();

    //if ($scope.currentUser.authenticated == false) {
    //    $scope.redirect();
    //}
    

    $scope.setCurrentUser();
    $scope.categories;
    $scope.createCategory = function() {
    	
    	//alert($window.localStorage.Token);
       $scope.flag.update = false;
       $scope.showHideCreateCategories = !$scope.showHideCreateCategories;
      
       };
       
    $scope.saveOrCreatecategory = function(valid,category) {
    	
    		if( $scope.flag.update == false){
    	
    		 $scope.showHideCreateCategories = !$scope.showHideCreateCategories;
    	       var url = "http://119.9.77.8:3000/api/v1/admin/categories";
    	    
    	       var req = {
    	  			 method: 'POST',
    	  			 url: url,
    	  			 headers: {
    	  			   'x-access-token': token,
    	  			 'Content-Type' : 'application/json'
    	  			 },
    	  			 data: { 
    	  				 
    	  	                "name": $scope.category.name,
    	  	               
    	  	                }
    	  			}
    	       			//console.log(req);
    	       			$http(req).success(function(data){
    	       				$scope.categories.push({
    	       					"name": $scope.category.name
    	       				});
    	       				$scope.category.name='';
    	  				
    	  			});
    	}
    	else{
    		//alert("ff");
    		 $scope.showHideCreateCategories = !$scope.showHideCreateCategories;
    	       var url = "http://119.9.77.8:3000/api/v1/admin/categories/" + $scope.category.id;
    	       var req = {
    	  			 method: 'PUT',
    	  			 url: url,
    	  			 headers: {
    	  			   'x-access-token': token,
    	  			 'Content-Type' : 'application/json'
    	  			 },
    	  			 data: { 
    	  				 

 	  	                "name": $scope.category.name,
 	  	                
    	  	                }
    	  			}
    	       			//console.log(req);
    	       			$http(req).success(function(data){
    	  				
    	  			});
    			}
    	
      
     };
    
     
     $scope.fetchcategory = function(){
    	if($window.localStorage.Token){
    	 var req = {
    			 method: 'GET',
    			 url: 'http://119.9.77.8:3000/api/v1/admin/categories',
    			 headers: {
    			   'x-access-token': token
    			 },
    			}
    			$http(req).success(function(data){
    				$scope.categories = data;
    			});
    	} 
    	 	
     };
 
     $scope.deletecategory = function(index,id){
    	
    	  var url = "http://119.9.77.8:3000/api/v1/admin/categories/" + id;
     
         var req = {
    			 method: 'DELETE',
    			 url: url,
    			 headers: {
    			   'x-access-token': token,
    			 'Content-Type' : 'application/json'
    			 }}
    			
         			//console.log(req);
         			$http(req).success(function(data){
         				 var index = -1;		
         		 		var comArr = eval( $scope.categories );
         		 		for( var i = 0; i < comArr.length; i++ ) {
         		 			if( comArr[i].id === id ) {
         		 				index = i;
         		 				break;
         		 			}
         		 		}
         		 		if( index === -1 ) {
         		 			alert( "Something gone wrong" );
         		 		}
         		 		$scope.categories.splice( index, 1 );		
         				
    			});
         
         
     	 
     };
     
     $scope.editcategory = function (index,c,id) {
    	 $scope.flag.update = true;
    	 $scope.category = c;
    	 $scope.showHideCreateCategories = !$scope.showHideCreateCategories;
    	}
     $scope.fetchcategory();
});


