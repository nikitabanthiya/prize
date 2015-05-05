
app.factory("AuthService", function (webService) {

    var authService = {};
    var credentials;

    authService.login = function (credentials, success, error) {

        webService.call("login", credentials, function (data) {
            data.authenticated = true;
            localStorage['credentials'] = JSON.stringify(data);
            success();
        }
        , function (message) {
            error(message);
        });

    }

    authService.credentials = function () {
        credentials = JSON.parse(localStorage.getItem('credentials'));
        return credentials;
    };

    authService.destroy = function (token, success, error) {
        webService.call("logout", { "Token": token }, function () {
            success();
        }
        , function (message) {
            error(message);
        });
    };

    return authService;

});