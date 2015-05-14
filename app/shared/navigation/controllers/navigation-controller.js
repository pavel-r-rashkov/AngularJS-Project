angular.module('navigationModule', [])
    .controller('navigationController', ['$scope', 'friendsService', 'usersService', function($scope, friendsService, usersService) {
        $scope.active = false;
        $scope.search = {};

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

        $scope.loadUsers = function() {
            if($scope.search.searchTerm === '') {
                $scope.users = [];
                return;
            }
            usersService.searchUsersByName($scope.search.searchTerm)
                .then(
                function(data) {
                    $scope.users = data['data'];
                },
                function() {
                    console.log('error getting users result');
                });
        }
    }]);