'use strict';

angular.module('commentLikesModule')
    .controller('commentLikesDataController', ['$scope', 'commentLikesService', '$routeParams', function($scope, commentLikesService, $routeParams) {
        var postId = $routeParams['postId'];
        var commentId = $routeParams['commentId'];

        commentLikesService.getCommentDetailedLikes(postId, commentId)
            .then(
            function(data) {
                $scope.users = data['data'].map(
                    function(element) {
                        return element['user'];
                    });
            },
            function(error) {
                console.log('error getting comment likes data');
            });
    }]);
