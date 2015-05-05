app.factory('webService', function (baseUrl, $http) {
    var api = {};

    api.call = function (endPoint, data, success, err) {
        $http({
            method: 'POST',
            url: baseUrl + endPoint,
            data: data
        })
        .success(function (data) {
            if (data.Status == 1) {
                if (data.Data != undefined || data.Data != null) {
                    success(data.Data);
                }
                else {
                    success(data);
                }
            }
            else {
                err(data.Message);
            }
        });
    };

    return api;
})