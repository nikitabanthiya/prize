
var app = angular.module("dashModule", ["ngRoute","ui.bootstrap","ngTable"]);

app.config(function ($routeProvider, $httpProvider) {

    //routing
    $routeProvider.when("/", {
        controller: "couponCtrl",
        templateUrl: "views/coupon.html"
    })
    .when("/user",{
        controller: "userCtrl",
        templateUrl: "views/user.html"
    })
    .when("/settings",{
        controller: "settingsCtrl",
        templateUrl: "views/settings.html"
    })
    .when("/query",{
        controller: "queryCtrl",
        templateUrl: "views/query.html"        
    })
    .when("/notification",{
        controller: "notificationCtrl",
        templateUrl: "views/notification.html"        
    })
    .when("/data",{
        controller: "dataCtrl",
        templateUrl: "views/data.html"        
    })
    .when("/mission",{
        controller: "missionCtrl",
        templateUrl: "views/mission.html"        
    })
    .when("/batch",{
        controller: "batchCtrl",
        templateUrl: "views/batches.html"        
    })
    .when("/auction",{
        controller: "auctionCtrl",
        templateUrl: "views/auction.html"        
    })
    .when("/category",{
        controller: "categoryCtrl",
        templateUrl: "views/category.html"        
    })
    .when("/lost",{
        controller: "lostCtrl",
        templateUrl: "views/lost.html"        
    })
    .otherwise({ redirectTo: "/lost" });

    //interceptor to $httpProvider
    $httpProvider.interceptors.push(['$injector',function ($injector) {
        return $injector.get('AuthInterceptor');
    }]);

} );
