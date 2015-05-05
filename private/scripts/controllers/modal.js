app.controller('ModalInstanceCtrl', function ($scope, $modalInstance, data) {

    $scope.post = data;

    $scope.ok = function () {
        $modalInstance.close($scope.post.Body);
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
});