app.controller('rootController', function ($rootScope, $routeParams, $scope, USER_ROLES, Redirect, $location, AuthService, webService,$window) {

    //variables
    $scope.currentUser = {};
    $scope.userRoles = USER_ROLES;
    $scope.isLoginPage = true;
    $scope.token = '';
    $scope.status = { isopen: false };
    $scope.title = '';

    //variables related to products/graph
    $scope.objects = [];
    $scope.values = [];
    $scope.units = [];
    $scope.watchRefer = 0;
    var tempValues = [];
    $scope.activeIndex = 0;

    //================================================ functions =================================

    $scope.setCurrentUser = function (user) {
        $scope.currentUser = AuthService.credentials();
        if ($scope.currentUser == null) {
            $scope.currentUser = { "authenticated": false };
        }
        $scope.currentUser.profilePic = "http://54.179.146.97/backend/uploads/users/" + $scope.currentUser.Id + "/" + $scope.currentUser.ImageUrl;
    };

    $scope.setCurrentPage = function (booleanValue) {
        $scope.isLoginPage = booleanValue;
    };


    //logout
    $scope.logout = function () {
    	   localStorage.clear();
            $window.location.href = ("http://localhost/freakoupon/freakoupon/public/#/");
            
        
    };

    //url change listner
    $rootScope.$on('$routeChangeSuccess', function () {
        //console.log($routeParams.token);
        $scope.token = $routeParams.token;
    });


    //redirect function
    $scope.redirect = function (page) {
        $(".activeMenu").removeClass("activeMenu");
        Redirect(page);
    };
    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> graph code ends <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
})