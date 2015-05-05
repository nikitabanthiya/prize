
var app = angular.module("authModule", ["ngRoute","ui.bootstrap"]);

app.config(function ($routeProvider, $httpProvider) {

    //routing
    $routeProvider.when("/", {
        controller: "loginCtrl",
        templateUrl: "views/login.html"
    })
    .when("/resetPassword/:token",{
        controller: "resetPassword",
        templateUrl: "views/resetPassword.html"
    })
    .when("/recoverPassword",{
        controller: "forgotPassword",
        templateUrl: "views/recoverPassword.html"
    })
    .otherwise({ redirectTo: "/" });

    //interceptor to $httpProvider
    $httpProvider.interceptors.push(['$injector',function ($injector) {
        return $injector.get('AuthInterceptor');
    }]);

} );
