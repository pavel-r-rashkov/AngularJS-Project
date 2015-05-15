'use strict';

angular.module('usersModule')
    .controller('wallController', ['$scope', 'usersService', '$routeParams', 'friendsService', function($scope, usersService, $routeParams, friendsService) {
        var username = $routeParams['username'];
        $scope.username = username;
        $scope.posts = [];
        $scope.lastPostId;
        $scope.loadingPosts = true;

        $scope.showPosts = function(startPostId) {
            startPostId = startPostId || '';
            $scope.loadingPosts = true;
            usersService.getWall($routeParams['username'], startPostId, 5)
                .then(
                function(data) {
                    //console.log(data['data']);
                    //for(var i in data['data']) {
                    //    console.log(data['data'][i].id + ' ' + data['data'][i].postContent);
                    //}
                    $scope.posts.push.apply($scope.posts, data['data']);
                    if(data['data'].length > 0) {
                        $scope.lastPostId = data['data'][data['data'].length - 1].id;
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