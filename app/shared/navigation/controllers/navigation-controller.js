angular.module('navigationModule', [])
    .controller('navigationController', ['$scope', function($scope) {
        $scope.isLoggedIn = localStorage['sessionToken'] !== undefined;
        $scope.username = localStorage['username'];
    }]);