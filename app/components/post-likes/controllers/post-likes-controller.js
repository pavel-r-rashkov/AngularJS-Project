'use strict';

angular.module('postLikesModule')
    .controller('postLikesController', ['$scope', 'postLikesService', function($scope, postLikesService) {
        $scope.likePost = function(postId) {
            postLikesService.likePost(postId)
                .then(
                function(data) {
                    $scope.post.liked = true;
                    $scope.post.likesCount = data['data']['likesCount'];
                },
                function(error) {
                    console.log('error liking post');
                });
        };

        $scope.unlikePost = function(postId) {
            postLikesService.unlikePost(postId)
                .then(
                function(data) {
                    $scope.post.liked = false;
                    $scope.post.likesCount = data['data']['likesCount'];
                },
                function() {
                    console.log('error unliking post');
                });
        };
    }]);
