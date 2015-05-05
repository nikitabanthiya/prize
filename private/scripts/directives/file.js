app.directive('fileModel', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            console.log("Linked");
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;

            element.bind('change', function () {
                console.log("Changed");
                scope.$apply(function () {
                    modelSetter(scope, element[0].files[0]);
                });
            });
        }
    };
} ]);


app.directive('multipleFileModel', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            console.log("Linked");
            var model = $parse(attrs.multipleFileModel);
            var modelSetter = model.assign;

            element.bind('change', function () {
                console.log("Changed");
                scope.flag.unsupported = false;
                var files = [];
                var j = 0;
                for (var i in element[0].files) {
                    var type = element[0].files[i].type;
                    if (type == "image/gif" || type == "image/png" || type == "image/jpeg" || type == "image/jpg")
                        files[j++] = element[0].files[i];
                    else
                        scope.flag.unsupported = true;
                }
                scope.$apply(function () {
                    scope.tracker = [];
                    scope.imageData = [];
                    modelSetter(scope, files);
                });
            });
        }
    };
} ]);
