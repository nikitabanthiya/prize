
app.controller("loginCtrl", function ($scope, $location, AuthService) {

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
        if (valid) {
            $scope.invalid = false;
            AuthService.login(user, function () {
                $scope.setCurrentPage(false);
                $location.path("/home");
                $location.replace();
            }
            , function (error) {
                $scope.invalid = true;
                console.log(error);
            });
        }
        else {
            console.log("invalid form data");
        }
    };

    //forgot password 
    $scope.forgotPassword = function () {
        $location.path("/recoverPassword");
        $location.replace();
    };

});