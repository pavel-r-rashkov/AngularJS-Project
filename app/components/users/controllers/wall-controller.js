'use strict';

angular.module('usersModule')
    .controller('wallController', ['$scope', 'usersService', '$routeParams', 'friendsService', function($scope, usersService, $routeParams, friendsService) {
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

        $scope.sendFriendRequest = function(username) {
            friendsService.sendFriendRequest(username)
                .then(
                function(data) {
                    console.log('request sent');
                },
                function() {
                    console.log('error sending friend request');
                });
        }

        usersService.getUserData(username)
            .then(
            function(data) {
                $scope.userFullData = data['data'];
                $scope.showFriendsPreview = data['data']['isFriend'] || (username === localStorage['username']);
            },
            function() {
                console.log('error getting user full data');
            });

        $scope.showPosts();
    }]);