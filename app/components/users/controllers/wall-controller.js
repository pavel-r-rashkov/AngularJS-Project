'use strict';

angular.module('usersModule')
    .controller('wallController', function($scope, usersService, $routeParams, friendsService, credentialsService, notyService) {
        var username = $routeParams['username'];
        var lastPostId;
        $scope.friendStatus = '';

        usersService.getUserData(username)
            .then(
            function(data) {
                var currentUsername = credentialsService.getCurrentUser().username;
                $scope.userFullData = data['data'];
                $scope.friendStatus = data['data']['hasPendingRequest'] ? 'pending' : 'notFriend';
                $scope.friendStatus = data['data']['isFriend'] ? 'friend' : $scope.friendStatus;
                $scope.friendStatus = data['data']['username'] == currentUsername ? '': $scope.friendStatus;

                $scope.showFriendsPreview = data['data']['isFriend'] || (username === currentUsername);
                $scope.showAddPost = data['data']['isFriend'] || (username === currentUsername);
            },
            function(error) {
            });

        $scope.username = username;
        $scope.wallData = {posts: []};
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
                    $scope.wallData.posts.push.apply($scope.wallData.posts, data['data']);
                    if(data['data'].length > 0) {
                        lastPostId = data['data'][data['data'].length - 1].id;
                    }
                    $scope.loadingPosts = false;
                },
                function(error) {
                    $scope.loadingPosts = false;
                });
        };

        $scope.sendFriendRequest = function(username) {
            friendsService.sendFriendRequest(username)
                .then(
                function(data) {
                    notyService.success('request sent');
                    $scope.friendStatus = 'pending';
                    $scope.$apply();
                },
                function() {
                    notyService.error('error sending friend request');
                });
        };

        $scope.showPosts();
    });