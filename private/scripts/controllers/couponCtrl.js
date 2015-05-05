
app.controller("couponCtrl", function ($scope, webService,$http,$window,ngTableParams,$filter,$q) {

    //variables
    $scope.contacts = [];
    $scope.quotes = [];
    $scope.messages = [];
    $scope.quoteIds = [];
    $scope.keys = [];
    $scope.displayNone = false;
    $scope.activeIndex = 0;
    var token = $window.localStorage.Token;
    $scope.flag = {update: false};
    //============================================================ functions ===========================================================================================
    $(".l1").addClass("activeMenu");
    //$scope.setHeight();
    $scope.setCurrentUser();
    $scope.coupons;
    $scope.createCoupon = function() {
       $scope.flag.update = false;
       $scope.showHideCreateCoupons = !$scope.showHideCreateCoupons;
     };
     $scope.flag = {vipYes: 0};
     $scope.flag = {vipNo: 0};
    $scope.saveCoupon = function(){
    	
    	 var url = "http://119.9.77.8:3000/api/v1/admin/coupon/" + $scope.coupon.id;
	       var req = {
	  			 method: 'PUT',
	  			 url: url,
	  			 headers: {
	  			   'x-access-token': token,
	  			 'Content-Type' : 'application/json'
	  			 },
	  			 data: { 
	  				 
	  	                "title": $scope.coupon.title,
	  	                "details":$scope.coupon.details,
	  	                "category": $scope.coupon.category,
	  	                "fine_print": $scope.coupon.fine_print,
	  	                "popularity_rank": $scope.coupon.popularity_rank,
	  	                "image": $scope.coupon.image,
	  	                "brand": $scope.coupon.brand,
	  	                "active_flag": $scope.coupon.active_flag,
	  	                "comments": $scope.coupon.comments,
	  	                "vip_flag": $scope.coupon.vip_flag,
	  	                /*"views_counter": $scope.coupon.views_counter,
	  	                "download_counter": $scope.coupon.download_counter,
	  	                "likes_counter": $scope.coupon.likes_counter,
	  	                "share_counter": $scope.coupon.share_counter,
	  	                "valid_thru": $scope.coupon.valid_thru,*/
	  	               
	  	                }
	  			}
	       			//console.log(req);
	       			$http(req).success(function(data){
	       				$window.location.reload();
	  			});
    	
    };
    $scope.cancelCoupons = function(){
    	$window.location.reload();
    }
    $scope.saveOrCreateCoupon = function(valid,coupon) {
    	
    	//alert($scope.flag.update);
    
    	JSON.stringify();
    		if( $scope.flag.update == false){
    			
    		
    		console.log($scope.selectedCategories );
    		 
    	       var url = "http://119.9.77.8:3000/api/v1/admin/coupon";
    	       //alert($scope.coupon.name);
    	       var req = {
    	  			 method: 'POST',
    	  			 url: url,
    	  			 headers: {
    	  			   'x-access-token': token,
    	  			 'Content-Type' : 'application/json'
    	  			 },
    	  			 data: { "coupon": {
    	  				 				"title": $scope.coupon.title,
					  	                "details":$scope.coupon.details,
					  	                "fine_print": $scope.coupon.fine_print,
					  	                "popularity_rank": $scope.coupon.popularity_rank.id ,
					  	                "image": $scope.coupon.image,
					  	                "brand": $scope.coupon.brand,
					  	                "active_flag": $scope.coupon.active_flag.id,
					  	                "local_flag": $scope.coupon.local_flag,
					  	                "vip_flag": $scope.coupon.vip_flag,
					  	                "comments": $scope.coupon.comments,
					  	               /* "views_counter": $scope.coupon.views_counter,
					  	                "download_counter": $scope.coupon.download_counter,
					  	                "likes_counter": $scope.coupon.likes_counter,
					  	                "share_counter": $scope.coupon.share_counter,*/
					  	                "valid_thru": $scope.coupon.valid_thru,
	  	                },
	  	                "cat_ids":$scope.selectedCategories    	  				   	  				
    	  	                }
    	  			}
    	       console.log(JSON.stringify(req.data));
    	       			//console.log(req);
    	       			$http(req).success(function(data){
    	  				//alert(data);
    	       				$scope.coupons.push({ "name": $scope.coupon.name,
    	       					"title": $scope.coupon.title,
    		  	                "details":$scope.coupon.details,
    		  	                "fine_print": $scope.coupon.fine_print,
    		  	                "popularity_rank": $scope.coupon.popularity_rank.name,
    		  	                "image": $scope.coupon.image,
    		  	                "brand": $scope.coupon.brand,
    		  	                "active_flag": $scope.coupon.active_flag.name,
    		  	                "local_flag": $scope.coupon.local_flag,
    		  	                "vip_flag": $scope.coupon.vip_flag,
    		  	                /*"views_counter": $scope.coupon.views_counter,
    		  	                "download_counter": $scope.coupon.download_counter,
    		  	                "likes_counter": $scope.coupon.likes_counter,
    		  	                "share_counter": $scope.coupon.share_counter,*/
    		  	                "valid_thru": $scope.coupon.valid_thru,});
    	       				
    	       				
    	  			});
    	}
      
     };
    
     $scope.fetchCoupon = function(){
    	if($window.localStorage.Token){
    	 var req = {
    			 method: 'GET',
    			 url: 'http://119.9.77.8:3000/api/v1/admin/coupons',
    			 headers: {
    			   'x-access-token': token
    			 },
    			}
    			$http(req).success(function(data){
    				$scope.coupons = data;
    				
    				$scope.tableParams = new ngTableParams({
    		             page: 1,
    		             count: 10
    		         },{
    		             total: data.length,
    		             getData: function($defer, params) {
    		                 var orderedData = params.sorting()?$filter('orderBy')(data, params.orderBy()):data;
    		                 $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
    		             }
    		         });
    		         $scope.checkboxes = { 'checked': false, items: {} };
    		var inArray = Array.prototype.indexOf ?
    		         function (val, arr) {
    		             return arr.indexOf(val)
    		         } :
    		         function (val, arr) {
    		             var i = arr.length;
    		             while (i--) {
    		                 if (arr[i] === val) return i;
    		             }
    		             return -1
    		         };
    		 $scope.names = function(column) {
    		     var def = $q.defer(),
    		         arr = [],
    		         names = [];
    		     angular.forEach(data, function(item){
    		         if (inArray(item.name, arr) === -1) {
    		             arr.push(item.name);
    		             names.push({
    		                 'id': item.name,
    		                 'title': item.name
    		             });
    		         }
    		     });
    		     def.resolve(names);
    		     return def;
    		 };
    		 // watch for check all checkbox
    		 $scope.$watch('checkboxes.checked', function(value) {
    		     angular.forEach($scope.users, function(item) {
    		         if (angular.isDefined(item.id)) {
    		             $scope.checkboxes.items[item.id] = value;
    		         }
    		     });
    		 });

    		 // watch for data checkboxes
    		 $scope.$watch('checkboxes.items', function(values) {
    		
    		     if (!$scope.users) {
    		         return;
    		     }
    		     var checked = 0, unchecked = 0,
    		         total = $scope.users.length;
    		     angular.forEach($scope.users, function(item) {
    		         checked   +=  ($scope.checkboxes.items[item.id]) || 0;
    		         unchecked += (!$scope.checkboxes.items[item.id]) || 0;
    		     });
    		     if ((unchecked == 0) || (checked == 0)) {
    		         $scope.checkboxes.checked = (checked == total);
    		     }
    		     // grayed checkbox
    		     angular.element(document.getElementById("select_all")).prop("indeterminate", (checked != 0 && unchecked != 0));
    		 }, true);
    				
    				
    			});
    	} 
    	 	
     };
 
     $scope.deleteCoupon = function(index,id){
    	
    	  var url = "http://119.9.77.8:3000/api/v1/admin/coupon/" + id;
     
         var req = {
    			 method: 'DELETE',
    			 url: url,
    			 headers: {
    			   'x-access-token': token,
    			 'Content-Type' : 'application/json'
    			 }}
    			
         			//console.log(req);
         			$http(req).success(function(data){
    				
    				/*var deleting = $scope.coupons.indexOf(index);
    		         $scope.coupons.splice(deleting,1);*/
    		         
    		        var index = -1;		
    		 		var comArr = eval( $scope.coupons );
    		 		for( var i = 0; i < comArr.length; i++ ) {
    		 			if( comArr[i].id === id ) {
    		 				index = i;
    		 				break;
    		 			}
    		 		}
    		 		if( index === -1 ) {
    		 			alert( "Something gone wrong" );
    		 		}
    		 		$scope.coupons.splice( index, 1 );		
    		 	
    		         
    		         
    			});
         
         
     	 
     };
   
     $scope.editCategory =function(id){
    	 alert("test");
    	 /*$scope.selectedCategories = $scope.selectedCategories1;
    	 var req = {
     			 method: 'GET',
     			 url: '/api/v1/admin/coupon/:'+id+'/categories',
     			 headers: {
     			   'x-access-token': token
     			 },
     			}
     			$http(req).success(function(data){
     					
     					
     					console.log(data);
     			});*/
     	} 
     
     
     $scope.editCoupon = function (index,c,id) {
    	 $scope.flag.update = true;
    	 $scope.coupon = c;
    	 $scope.showHideCreateCoupons = !$scope.showHideCreateCoupons;
    	}
    
         $scope.editId = -1;
         $scope.setEditId =  function(c,id) {
             $scope.editId = id;
             $scope.coupon = c;
             //$scope.selectedCategories1 = $scope.selectedCategories;
        	 var req = {
         			 method: 'GET',
         			 url: 'http://119.9.77.8:3000/api/v1/admin/coupon/'+id+'/categories',
         			 headers: {
         			   'x-access-token': token
         			 },
         			}
         			$http(req).success(function(data){
         				var cats=[];
         				
         				for(i=0 ; i<data.length; i++){
         					
         					cats.push(data[i]["id"]);
         				
         				}
         				
         				$scope.selectedCategories =cats;
         					
         					//console.log(cats,$scope.selectedCategories);
         			});
        	
        	 
         }
         
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
          					$scope.items = data;
          					console.log(data);
          			});
          	} 
          	 	
           };
           
           $scope.fetchBrand = function(){
             	if($window.localStorage.Token){
             	 var req = {
             			 method: 'GET',
             			 url: 'http://119.9.77.8:3000/api/v1/admin/brands',
             			 headers: {
             			   'x-access-token': token
             			 },
             			}
             			$http(req).success(function(data){
             					$scope.brands = data;
             					
             					console.log(data);
             			});
             	} 
             	 	
              };
            
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
            $scope.local_check = {
            		"0":"No",
            		"1":"Yes"
            		
            };
            $scope.vip_check = {
            		"0":"No",
            		"1":"Yes"
            		
            };
             $scope.popularityRank = [
                                    {id: '0', name: 'Default'},
                                    {id: '1', name: 'Popular 1'},
                                    {id: '2', name: 'Popular 2'},
                                    {id: '3', name: 'Popular 3'},
                                 ];
            
           $scope.fetchcategory();
           $scope.fetchCoupon();
          
           $scope.fetchBrand();
           $scope.deleteAll = function(t){
        	   console.log(t);
           }
     
});



