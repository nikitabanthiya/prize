app
.factory('webService', function () {
// Service logic
// ...
var token =  $cookies.get('token');
var set = function(d){
	token = d;
};
var get = function(){
	return token;
};

};
// Public API here
return {
set: set,
get: get,
};
});
