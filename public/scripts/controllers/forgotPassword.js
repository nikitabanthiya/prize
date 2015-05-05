app.controller('forgotPassword', function ($scope, $location, webService) {

    //variables
    $scope.user = { "Email": "" };
    $scope.invalid = false;
    

    //================================================ functions =================================
    $scope.goBack = function () {
        $location.path("/");
        $location.replace();
    };

    //send reset link  
    $scope.reset = function (valid, user) {
        if (valid) {
            $scope.invalid = false;
            webService.call("forgotPassword", { "EmailId": user.Email }, function (data) {
                console.log(data);
                if (data.Status == 1) {
                    $location.path("/resetPassword");
                    $location.replace();
                }
            }
            , function (message) {
                console.log(message);
            });
        }
        else {
            console.log("invalid form data");
        }
    };

})