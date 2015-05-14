angular.module('commentsModule').directive('showComment', function () {
    return {
        scope: {
            comment: '=comment',
            postId: '=postId',
            removeComment: '&'
        },
        templateUrl: 'components/comments/views/comment.html',
        controller: function ($scope, $element, $attrs, commentsService) {
            $scope.deleteComment = function(postId, commentId) {
                commentsService.deleteComment(postId, commentId)
                    .then(
                    function() {
                        $scope.removeComment({commentId: commentId});
                    },
                    function() {
                        console.log('error deleting comment');
                    });
            };
        }
    };
});
