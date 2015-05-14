angular.module('commentLikesModule').directive('showCommentLikes', function () {
    return {
        scope: {
            comment: '=comment',
            postId: '=postId'
        },
        templateUrl: 'components/comment-likes/views/comment-likes.html',
        controller: function ($scope, $element, $attrs, commentLikesService) {
            $scope.likeComment = function(commentId) {
                commentLikesService.likeComment($scope.postId, commentId)
                    .then(
                    function(data) {
                        $scope.comment.liked = true;
                        $scope.comment.likesCount = data['data']['likesCount'];
                    },
                    function(error) {
                        console.log('error liking comment');
                    });
            };

            $scope.unlikeComment = function(commentId) {
                commentLikesService.unlikeComment($scope.postId, commentId)
                    .then(
                    function(data) {
                        $scope.comment.liked = false;
                        $scope.comment.likesCount = data['data']['likesCount'];
                    },
                    function() {
                        console.log('error unlike comment');
                    });
            };


        }
    };
});
