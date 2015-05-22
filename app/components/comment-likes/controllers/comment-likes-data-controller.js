'use strict';

angular.module('commentLikesModule')
    .controller('commentLikesDataController', function($scope, commentLikesService, $routeParams, notyService) {
        var postId = $routeParams['postId'];
        var commentId = $routeParams['commentId'];

        commentLikesService.getCommentDetailedLikes(postId, commentId)
            .then(
            function(data) {
                $scope.users = data['data'].map(
                    function(element) {
                        return element['user'];
                    },
                    function(error) {
                        notyService.error('error loading comment likes info');
                    });
            });
    });
