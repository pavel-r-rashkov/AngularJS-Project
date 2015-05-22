angular.module('commentsModule').directive('showComment', function () {
    return {
        scope: {
            comment: '=comment',
            postId: '=postId',
            comments: '=comments',
            commentsCount: '=commentsCount'
        },
        templateUrl: 'components/comments/views/comment.html',
        controller: function ($scope, $element, $attrs, commentsService) {
            $scope.userPreviewActive = false;
            $scope.showCommentEditForm = false;

            $scope.deleteComment = function(postId, commentId) {
                commentsService.deleteComment(postId, commentId)
                    .then(
                    function() {
                        $scope.commentsCount--;
                        $scope.comments = $scope.comments.filter(function(element) {return element.id !== commentId;});
                    },
                    function() {
                        console.log('error deleting comment');
                    });
            };

            $scope.toggleUserPreview = function() {
                $scope.userPreviewActive = !$scope.userPreviewActive;
            };

            $scope.toggleCommentEditForm = function() {
                $scope.showCommentEditForm = !$scope.showCommentEditForm;
            };
        }
    };
});
