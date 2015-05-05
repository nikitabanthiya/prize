app.controller('rootController', function ($rootScope, $routeParams, $scope, USER_ROLES, Redirect, $location, AuthService, webService) {

    //variables
    $scope.currentUser = {};
    $scope.userRoles = USER_ROLES;
    $scope.isLoginPage = true;
    $scope.token = '';
    $scope.status = { isopen: false };
    $scope.title = '';


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

    //url change listner
    $rootScope.$on('$routeChangeSuccess', function () {
        //console.log($routeParams.token);
        $scope.token = $routeParams.token;
    });


    //redirect function
    $scope.redirect = function (page) {

        Redirect(page);
    };
    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> graph code ends <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
})