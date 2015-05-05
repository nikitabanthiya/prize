app.factory("Redirect", function ($location) {

    var redirect = function (page) {
        switch (page) {
            case 1: $location.path("/coupon"); $location.replace(); break;
            case 2: $location.path("/user"); $location.replace(); break;
            case 3: $location.path("/auction"); $location.replace(); break;
            case 4: $location.path("/mission"); $location.replace(); break;
            case 5: $location.path("/query"); $location.replace(); break;
            case 6: $location.path("/data"); $location.replace(); break;
            case 7: $location.path("/batch"); $location.replace(); break;
            case 8: $location.path("/notification"); $location.replace(); break;
            case 9: $location.path("/settings"); $location.replace(); break;
            default: $location.path("/"); $location.replace(); break;
        }
    };

    return redirect;
})