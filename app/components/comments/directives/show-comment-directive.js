angular.module('commentsModule').directive('showComment', function () {
    return {
        scope: {
            comment: '=comment',
            post: '=post'
        },
        templateUrl: 'components/comments/views/comment.html',
        controller: function ($scope, commentsService, credentialsService, notyService) {
            var currentUsername = credentialsService.getCurrentUser().username;
            $scope.userPreviewActive = false;
            $scope.showCommentEditForm = false;

            $scope.canEditComment = currentUsername === $scope.comment.author.username;
            $scope.canDeleteComment = (currentUsername === $scope.post.author.username) ||
                $scope.comment.author.username === currentUsername;

            $scope.deleteComment = function(postId, commentId) {
                commentsService.deleteComment(postId, commentId)
                    .then(
                    function() {
                        $scope.post.totalCommentsCount--;
                        $scope.post.comments = $scope.post.comments.filter(function(element) {return element.id !== commentId;});
                        notyService.success('comment deleted');
                    },
                    function() {
                        notyService.error('error deleting comment');
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
