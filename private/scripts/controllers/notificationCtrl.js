
app.controller("notificationCtrl", function ($scope, webService) {

    //variables
    $scope.contacts = [];
    $scope.quotes = [];
    $scope.messages = [];
    $scope.quoteIds = [];
    $scope.keys = [];
    $scope.displayNone = false;
    $scope.activeIndex = 0;

    //============================================================ functions ===========================================================================================
    $(".l8").addClass("activeMenu");
    //$scope.setHeight();
    $scope.setCurrentUser();

    //if ($scope.currentUser.authenticated == false) {
    //    $scope.redirect();
    //}

    $scope.update = function () {

        webService.call('../user/update',
                { "Token": $scope.currentUser.Token, "LastName": $scope.currentUser.LastName, "FirstName": $scope.currentUser.FirstName,
                    "EmailId": $scope.currentUser.EmailId, "Company": $scope.currentUser.Company, "Role": $scope.currentUser.Role, "Location": $scope.currentUser.Location
                },
        function (data) {
            console.log(data);
            $scope.editing = false;
        }
        ,
        function (err) {

        });
    };

});