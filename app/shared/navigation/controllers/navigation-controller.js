angular.module('navigationModule', [])
    .controller('navigationController', ['$scope', 'friendsService', function($scope, friendsService) {
        $scope.active = false;

        $scope.getUsername = function() {
            return localStorage['username'];
        };

        $scope.getLoggedIn = function() {
            return localStorage['sessionToken'] !== undefined;
        };

        $scope.toggleRequests = function() {
            $scope.active = !$scope.active;
            if($scope.active) {
                getRequests();
            }
        };

        $scope.$on("$routeChangeSuccess", function() {
            if($scope.getLoggedIn()) {
                getRequests();
            }
        });

        function getRequests() {
            friendsService.getFriendRequests()
                .then(
                function(data) {
                    $scope.requestsCount = {count: data['data'].length};
                    $scope.requests = data['data'];
                },
                function() {
                    console.log('error getting friend requests');
                });
        }
    }]);