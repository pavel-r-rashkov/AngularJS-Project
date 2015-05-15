angular.module('navigationModule', [])
    .controller('navigationController', ['$scope', 'friendsService', 'usersService', '$location', function($scope, friendsService, usersService, $location) {
        $scope.requestsActive = false;
        $scope.search = {};

        $scope.getLoggedIn = function() {
            return localStorage['sessionToken'] !== undefined;
        };

        usersService.getUserPreviewData(localStorage['username'])
            .then(
            function(data) {
                $scope.currentUser = data['data'];
            },
            function() {
                console.log('error getting user data');
            });

        $scope.toggleRequests = function() {
            $scope.requestsActive = !$scope.requestsActive;
            if($scope.requestsActive) {
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
                    console.log('error getting user results');
                });
        }

        $scope.logout = function() {
            usersService.logout()
                .then(
                function() {
                    $location.path('/home');
                },
                function() {
                    console.log('error logging out');
                });
        }
    }]);