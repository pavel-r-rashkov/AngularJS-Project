'use strict';

angular.module('profilesModule')
    .controller('newsFeedController', ['$scope', 'profilesService', function($scope, profilesService) {
        $scope.username = localStorage['username'];
        $scope.posts = [];
        $scope.lastPostId;
        $scope.loadingPosts = false;

        $scope.showPosts = function() {
            if($scope.loadingPosts) {
                return;
            }
            var startPostId = $scope.lastPostId || '';
            $scope.loadingPosts = true;
            profilesService.getNewsFeed(startPostId, 5)
                .then(function (data) {
                    $scope.posts.push.apply($scope.posts, data['data']);
                    if(data['data'].length > 0) {
                        $scope.lastPostId = data['data'][data['data'].length - 1].id;
                    }
                    $scope.loadingPosts = false;
                },
                function () {
                    $scope.loadingPosts = false;
                    console.log('error loading user\'s news feed');
                });

        };

        $scope.showPosts();
    }]);
