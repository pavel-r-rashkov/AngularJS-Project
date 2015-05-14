angular.module('postsModule').directive('showPost', function () {
    return {
        scope: {
            postsUpdate: '&',
            post: '=post'
        },
        templateUrl: 'components/posts/views/post.html',
        controller: function ($scope, $element, $attrs, postsService) {
            $scope.deletePost = function(postId) {
                postsService.deletePost(postId)
                    .then(
                    function() {
                        $scope.postsUpdate();
                    },
                    function() {
                        console.log('error deleting post');
                    });
            };

            $scope.showForm = false;
            $scope.userPreviewActive = false;

            $scope.toggleCommentForm = function() {
                $scope.showForm = !$scope.showForm;
            };

            $scope.appendComment = function(comment) {
                $scope.post.comments.push(comment);
                $scope.post.totalCommentsCount += 1;
            };

            $scope.removeComment = function(commentId) {
                $scope.post.totalCommentsCount -= 1;
                $scope.post.comments = $scope.post.comments.filter(function(element) {return element.id != commentId;});
            }

            $scope.toggleUserPreview = function() {
                $scope.userPreviewActive = !$scope.userPreviewActive;
            }

        }
    };
});