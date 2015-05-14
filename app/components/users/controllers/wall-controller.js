'use strict';

angular.module('usersModule')
    .controller('wallController', ['$scope', 'usersService', '$routeParams', function($scope, usersService, $routeParams) {
        var username = $routeParams['username'];
        $scope.username = username;

        $scope.showPosts = function() {
            usersService.getWall($routeParams['username'], '', 5)
                .then(
                function(data) {
                    $scope.posts = data['data'];
                },
                function() {
                    console.log('error getting wall data');
                });
        };

        usersService.getUserData(username)
            .then(
            function(data) {
                $scope.userFullData = data['data'];
            },
            function() {
                console.log('error getting user full data');
            });

        $scope.showPosts();
    }]);