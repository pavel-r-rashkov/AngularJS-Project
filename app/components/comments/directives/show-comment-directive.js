angular.module('commentsModule').directive('showComment', function () {
    return {
        scope: {
            comment: '=comment',
            post: '=post'
        },
        templateUrl: 'components/comments/views/comment.html',
        controller: function ($scope, $element, $attrs, commentsService, credentialsService) {
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
