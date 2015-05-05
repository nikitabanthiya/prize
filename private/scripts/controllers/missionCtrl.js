
app.controller("missionCtrl", function ($scope,$window,$http) {

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
    $scope.missions;
    $scope.createMission = function() {
    	
    	//alert($window.localStorage.Token);
       $scope.flag.update = false;
       $scope.showHideCreateMissions = !$scope.showHideCreateMissions;
      
       };
       $scope.saveMission = function(){
       
      	 var url = "http://119.9.77.8:3000/api/v1/admin/mission/" + $scope.mission.id;
  	       var req = {
  	  			 method: 'PUT',
  	  			 url: url,
  	  			 headers: {
  	  			   'x-access-token': token,
  	  			 'Content-Type' : 'application/json'
  	  			 },
  	  			 data: { 
  	  				 
  	  	                "sponser": $scope.mission.sponser,
  	  	                "details":$scope.mission.details,
  	  	                "url": $scope.mission.url,
  	  	                "info": $scope.info,
  	  	                "participant": $scope.participant,
  	  	                "image": $scope.mission.image,
  	  	                "prize": $scope.mission.prize,
  	  	                "active_flag": $scope.mission.active_flag,
  	  	                "participant_counter": $scope.mission.participant_counter,
  	  	                "comments": $scope.mission.comments,
  	  	                "views_counter": $scope.mission.views_counter,
  	  	                "report_counter": $scope.mission.report_counter,
  	  	                "likes_counter": $scope.mission.likes_counter,
  	  	                "share_counter": $scope.mission.share_counter,
  	  	                "valid_thru": $scope.mission.valid_thru,
  	  	               
  	  	                }
  	  			}
  	       			//console.log(req);
  	       			$http(req).success(function(data){
  	       				
  	  			});
      	
      };
      $scope.detailsMission = function(){
    	  var myEl = angular.element( document.querySelector( '#divID' ) );
    	     myEl.append('\'Hi<br/>\''); 
    	    myEl.append('  <table ng-table="tableParams" class="table"> \
    	            <tbody ng-repeat="m in missions" ng-scroller-repeat= "m in missions"> \
    	            <tr id="tr{{m.id}}" ng-class-odd="\'odd\'" ng-class-even="\'even\'"> \
    	            <td width="30" style="text-align: left" header="\'ng-table/headers/checkbox.html\'"> \
            <input type="checkbox" ng-model="checkboxes.items[m.id]" /> \
        </td> \
        <td class="rowTd" data-title="\'Pic\'"sortable="\'image\'">$scope.mission.image</td> \
        </tr> \
        </tbody> \
        </table> \
        <tr ng-show="editId===m.id" ng-if="editId===m.id"> \
        <td colspan="7" ng-include src="\'views/missionEdit.html\'"> \
        </td> \
    </tr> ');
      }
      
     
    $scope.saveOrCreateMission = function(valid,mission) {
    	
    		if( $scope.flag.update == false){
    		//alert("this");
    		 $scope.showHideCreateMissions = !$scope.showHideCreateMissions;
    	       var url = "http://119.9.77.8:3000/api/v1/admin/mission";
    	       //alert($scope.mission.name);
    	       var req = {
    	  			 method: 'POST',
    	  			 url: url,
    	  			 headers: {
    	  			   'x-access-token': token,
    	  			 'Content-Type' : 'application/json'
    	  			 },
    	  			 data: { 
    	  				 
    	  				"sponser": $scope.mission.sponser,
  	  	                "details":$scope.mission.details,
  	  	                "url": $scope.mission.url,
  	  	                "info": $scope.info,
  	  	                "participant": $scope.participant,
  	  	                "image": $scope.mission.image,
  	  	                "prize": $scope.mission.prize,
  	  	                "active_flag": $scope.mission.active_flag,
  	  	                "participant_counter": $scope.mission.participant_counter,
  	  	                "comments": $scope.mission.comments,
  	  	                "views_counter": $scope.mission.views_counter,
  	  	                "report_counter": $scope.mission.report_counter,
  	  	                "likes_counter": $scope.mission.likes_counter,
  	  	                "share_counter": $scope.mission.share_counter,
  	  	                "valid_thru": $scope.mission.valid_thru,
    	  	                }
    	  			}
    	       			//console.log(req);
    	       			$http(req).success(function(data){
    	  				$scope.missions.push({

    	  					"sponser": $scope.mission.sponser,
      	  	                "details":$scope.mission.details,
      	  	                "url": $scope.mission.url,
      	  	                "info": $scope.info,
      	  	                "participant": $scope.participant,
      	  	                "image": $scope.mission.image,
      	  	                "prize": $scope.mission.prize,
      	  	                "active_flag": $scope.mission.active_flag,
      	  	                "participant_counter": $scope.mission.participant_counter,
      	  	                "comments": $scope.mission.comments,
      	  	                "views_counter": $scope.mission.views_counter,
      	  	                "report_counter": $scope.mission.report_counter,
      	  	                "likes_counter": $scope.mission.likes_counter,
      	  	                "share_counter": $scope.mission.share_counter,
      	  	                "valid_thru": $scope.mission.valid_thru,
    	  				});

    	  				$scope.mission.sponser = '';
  	  	               $scope.mission.details = '';
  	  	                 $scope.mission.url = '';
  	  	               $scope.info = '';
  	  	                $scope.participant = '';
  	  	               $scope.mission.image = '';
  	  	                $scope.mission.prize = '';
  	  	                $scope.mission.active_flag = '';
  	  	                $scope.mission.participant_counter = '';
  	  	                 $scope.mission.comments = '';
  	  	                 $scope.mission.views_counter = '';
  	  	                $scope.mission.report_counter = '';
  	  	                $scope.mission.likes_counter = '';
  	  	                $scope.mission.share_counter = '';
  	  	                $scope.mission.valid_thru = '';
    	  			});
    	}
    	else{
    		//alert("ff");
    		 
    			}
    	
      
     };
    
     
     $scope.fetchmission = function(){
    	if($window.localStorage.Token){
    	 var req = {
    			 method: 'GET',
    			 url: 'http://119.9.77.8:3000/api/v1/admin/missions',
    			 headers: {
    			   'x-access-token': token
    			 },
    			}
    			$http(req).success(function(data){
    				$scope.missions = data;
    				//item.date = $filter('date')(date[ item.date, "dd/MM/yyyy"]);
    				$scope.missions.exp_thru = $filter('date')(date[$scope.missions.exp_thru,"dd/MM/yyyy"]);
    			});
    	} 
    	 	
     };
 
     $scope.deleteMission = function(index,id){
    	
    	  var url = "http://119.9.77.8:3000/api/v1/admin/mission/" + id;
     
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
          		 		var comArr = eval( $scope.missions );
          		 		for( var i = 0; i < comArr.length; i++ ) {
          		 			if( comArr[i].id === id ) {
          		 				index = i;
          		 				break;
          		 			}
          		 		}
          		 		if( index === -1 ) {
          		 			alert( "Something gone wrong" );
          		 		}
          		 		$scope.missions.splice( index, 1 );		
          		 	 
    			});
         
         
     	 
     };
     
     $scope.editMission = function (index,c,id) {
    	 $scope.flag.update = true;
    	 $scope.mission = c;
    	 $scope.showHideCreateMissions = !$scope.showHideCreateMissions;
    	}
     $scope.fetchmission();
     
     $scope.editId = -1;
     $scope.activeStatus = [
                            {id: '1', name: 'active'},
                            {id: '2', name: 'suspend'},
                            {id: '3', name: 'Soft Delete'},
                            {id: '4', name: 'Hard Delete'},
                         ];
     $scope.setEditId =  function(m,id) {
    	 alert($scope.editId+"id"+id);
         $scope.editId = id;
         $scope.mission = m;
     }

});


