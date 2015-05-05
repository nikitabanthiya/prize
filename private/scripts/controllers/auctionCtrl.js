
app.controller("auctionCtrl", function ($scope, webService, $timeout, $modal,$http,$window) {

    //variables
    $scope.contacts = [];
    $scope.quotes = [];
    $scope.messages = [];
    $scope.quoteIds = [];
    $scope.keys = [];
    $scope.displayNone = false;
    $scope.activeIndex = 0;
    $scope.flag = {update: false};
    //============================================================ functions ===========================================================================================
    $(".l3").addClass("activeMenu");
    
    //$scope.auction;
    var token = $window.localStorage.Token;
    $scope.auction;
    $scope.createAuction = function() {
        $scope.showHideCreateAuctions = !$scope.showHideCreateAuctions;
     };
        
    $scope.saveAuction =function(){
    	$scope.showHideCreateAuctions = !$scope.showHideCreateAuctions;
	    var url = "http://119.9.77.8:3000/api/v1/admin/auction/" + $scope.auction.id;
	    var req = {
	  			 method: 'PUT',
	  			 url: url,
	  			 headers: {
	  			   'x-access-token': token,
	  			 'Content-Type' : 'application/json'
	  			 },
	  			 data: { 
	  				    "prize": $scope.auction.prize,
	  	                "image": $scope.auction.image,
	  	                "valid_thru": $scope.auction.valid_thru,
	  	                "active_flag": $scope.auction.active_flag,
	  	                "bid_cost": $scope.auction.bid_cost,
	  	                "compensation_ratio": $scope.auction.compensation_ratio,
	  	                "min_bid": $scope.auction.min_bid,
	  	                "bid_margin": $scope.auction.bid_margin,
	  	            	"sponsor": $scope.auction.sponsor,
	  	            	"sponsor_url": $scope.auction.sponsor_url,
	  	            	"description": $scope.auction.description,
	  	            	"comments":$scope.auction.comments,
	  	            	"gift_flag":$scope.auction.gift_flag
	  	                 }
	  			}
	        		$http(req).success(function(data){
	  				
	  			$scope.auction.push({ 'name':$scope.auction.name, 'details': $scope.auction.details, 'min_bid':$scope.auction.min_bid,'price':$scope.auction.price,'current_bid':$scope.auction.current_bid,'live':$scope.auction.live,'image':$scope.auction.image });
	  			});
			}
    $scope.saveOrCreateAuction = function(valid,auction) {
       		 $scope.showHideCreateAuctions = !$scope.showHideCreateAuctions;
      	       var url = "http://119.9.77.8:3000/api/v1/admin/auction/";
      	        var req = {
      	  			 method: 'POST',
      	  			 url: url,
      	  			 headers: {
      	  			   'x-access-token': token,
      	  			 'Content-Type' : 'application/json'
      	  			 },
      	  			 data: { 
      	  				"prize": $scope.auction.prize,
	  	                "image": $scope.auction.image,
	  	                "valid_thru": $scope.auction.valid_thru,
	  	                "active_flag": $scope.auction.active_flag,
	  	                "bid_cost": $scope.auction.bid_cost,
	  	                "compensation_ratio": $scope.auction.compensation_ratio,
	  	                "min_bid": $scope.auction.min_bid,
	  	                "bid_margin": $scope.auction.bid_margin,
	  	            	"sponsor": $scope.auction.sponsor,
	  	            	"sponsor_url": $scope.auction.sponsor_url,
	  	            	"description": $scope.auction.description,
	  	            	"comments":$scope.auction.comments,
	  	            	"gift_flag":$scope.auction.gift_flag
	  	                
      	  	               
      	  	                }
      	  			}
      	       		
      	       			$http(req).success(function(data){
      	  				$scope.auctions.push({"prize": $scope.auction.prize,
    	  	                "image": $scope.auction.image,
    	  	                "valid_thru": $scope.auction.valid_thru,
    	  	                "active_flag": $scope.auction.active_flag,
    	  	                "bid_cost": $scope.auction.bid_cost,
    	  	                "compensation_ratio": $scope.auction.compensation_ratio,
    	  	                "min_bid": $scope.auction.min_bid,
    	  	                "bid_margin": $scope.auction.bid_margin,
    	  	            	"sponsor": $scope.auction.sponsor,
    	  	            	"sponsor_url": $scope.auction.sponsor_url,
    	  	            	"description": $scope.auction.description,
    	  	            	"comments":$scope.auction.comments,
    	  	            	"gift_flag":$scope.auction.gift_flag
    	  	                
      	  				});
      	  				/*$scope.auction.name ="";
	  	                 $scope.auction.details="";
	  	                 $scope.auction.min_bid="";
	  	                 $scope.auction.price="";
	  	                 $scope.auction.current_bid="";
	  	                 $scope.auction.live="";
	  	                $scope.auction.image="";
	  	              $scope.auction.bonus="";
	  	               $scope.auction.min_margin="";
	  	                $scope.auction.exp_date="";*/
      	  				
      	  			});
      
       };
      
       $scope.deleteAuction = function(index,id){
      	
      	  var url = "http://119.9.77.8:3000/api/v1/admin/auction/" + id;
       
           var req = {
      			 method: 'DELETE',
      			 url: url,
      			 headers: {
      			   'x-access-token': token,
      			 'Content-Type' : 'application/json'
      			 }}
      			
           			$http(req).success(function(data){
      						
     		 		var comArr = eval( $scope.auctions );
     		 		for( var i = 0; i < comArr.length; i++ ) {
     		 			if( comArr[i].id === id ) {
     		 				index = i;
     		 				break;
     		 			}
     		 		}
     		 		if( index === -1 ) {
     		 			alert( "Something gone wrong" );
     		 		}
     		 		$scope.auctions.splice( index, 1 );	
      			}).error(function(data) {
	  			
	  			  });
           
           
       	 
       };
       
       $scope.editAuction = function (index,a,id) {
      	 $scope.flag.update = true;
      	 $scope.auction = a;
      	 $scope.showHideCreateAuctions = !$scope.showHideCreateAuctions;
      	}
     	     
     	 $scope.fetchAuction = function(){
 	    	if($window.localStorage.Token){
 	    	 var req = {
 	    			 method: 'GET',
 	    			 url: 'http://119.9.77.8:3000/api/v1/admin/auctions',
 	    			 headers: {
 	    			   'x-access-token': token
 	    			 },
 	    	 		}
 	    			$http(req).success(function(data){
 	    				$scope.auctions = data;
 	    			});
 	    	} 
 	    	 	
 	     };
 	     $scope.liveSuspendAuction = function(id,live){
 	    	
 	    	 var req = {
 	    			 method: 'PUT',
 	    			 url: 'http://119.9.77.8:3000/api/v1/admin/auction/'+id+'/togglelive',
 	    			 headers: {
 	    			   'x-access-token': token
 	    			 },
 	    			 data :{
 	    				live:live
 	    			 },
 	    	 		}
 	    			$http(req).success(function(data){
 	    				$scope.auction = data;
 	    				$window.location.reload();
 	    			});
 	     }
 	    
 $scope.fetchAuction(); 
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
    $scope.cancel = function(){
    	$window.location.reload();
    }
    $scope.editId = -1;
    $scope.setEditId =  function(a,id) {
        $scope.editId = id;
        $scope.auction = a;  
    }
});