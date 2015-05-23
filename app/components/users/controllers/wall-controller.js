'use strict';

angular.module('usersModule')
    .controller('wallController', ['$scope', 'usersService', '$routeParams', 'friendsService', 'credentialsService', function($scope, usersService, $routeParams, friendsService, credentialsService) {
        var username = $routeParams['username'];
        var lastPostId;

        usersService.getUserData(username)
            .then(
            function(data) {
                var currentUsername = credentialsService.getCurrentUser().username;
                $scope.userFullData = data['data'];
                $scope.friendStatus = data['data']['hasPendingRequest'] ? 'pending' : 'notFriend';
                $scope.friendStatus = data['data']['isFriend'] ? 'friend' : $scope.friendStatus;
                $scope.friendStatus = username === currentUsername ? '': $scope.friendStatus;
                $scope.showFriendsPreview = data['data']['isFriend'] || (username === currentUsername);
                $scope.showAddPost = data['data']['isFriend'] || (username === currentUsername);
            },
            function() {
                console.log('error getting user full data');
            });

        $scope.username = username;
        $scope.posts = [];
        $scope.loadingPosts = false;

        $scope.showPosts = function() {
            if($scope.loadingPosts) {
                return;
            }
            $scope.loadingPosts = true;
            var startPostId = lastPostId || '';

            usersService.getWall($routeParams['username'], startPostId, 5)
                .then(
                function(data) {
                    $scope.posts.push.apply($scope.posts, data['data']);
                    if(data['data'].length > 0) {
                        lastPostId = data['data'][data['data'].length - 1].id;
                    }
                    $scope.loadingPosts = false;
                },
                function() {
                    $scope.loadingPosts = false;
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
        };

        $scope.showPosts();
    }]);