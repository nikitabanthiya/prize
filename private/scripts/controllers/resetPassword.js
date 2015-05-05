app.controller('resetPassword', function ($scope, $location, $timeout, webService) {

    //variables
    $scope.myCreds = { "first": "", "confirm": "" };
    $scope.invalid = false;
    $scope.mismatch = false;
    $scope.redirect = false;

    //================================================ functions =================================
    $scope.goBack = function () {
        $location.path("/");
        $location.replace();
    };

    //update password
    $scope.update = function (valid, myCreds) {
        $scope.mismatch = false;
        if (valid) {
            if (myCreds.confirm == myCreds.first) {
                $scope.invalid = false;
                webService.call("resetPassword", { "Token": $scope.token, "Password": myCreds.confirm }, function (data) {
                    console.log(data);
                    if (data.Status == 1) {
                        $scope.redirect = true;
                        $timeout(function () {
                            $location.path("/");
                            $location.replace();
                        }, 5000);
                    }
                }
                , function (message) {
                    console.log(message);
                });
            }
            else {
                $scope.mismatch = true;
            }
        }
        else {
            console.log("invalid form data");
        }
    };

})