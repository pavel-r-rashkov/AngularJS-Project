angular.module('postsModule').directive('showPost', function () {
    return {
        scope: {
            posts: '=',
            post: '='
        },
        templateUrl: 'components/posts/views/post.html',
        controller: function ($scope, $element, $attrs, postsService) {
            $scope.showAddForm = false;
            $scope.showEditForm = false;
            $scope.userPreviewActive = false;
            $scope.allCommentsShown = function() {
                return $scope.post.totalCommentsCount == $scope.post.comments.length;
            };

            $scope.deletePost = function(postId) {
                postsService.deletePost(postId)
                    .then(
                    function() {
                        $scope.posts = $scope.posts.filter(function(element) {return element.id !== postId;});
                    },
                    function() {
                        console.log('error deleting post');
                    });
            };

            $scope.toggleCommentForm = function() {
                $scope.showAddForm = !$scope.showAddForm;
            };

            $scope.togglePostEditForm = function() {
                $scope.showEditForm = !$scope.showEditForm;
            };

            $scope.toggleUserPreview = function() {
                $scope.userPreviewActive = !$scope.userPreviewActive;
            };

            $scope.toggleShowComments = function() {
                postsService.getPostComments($scope.post.id)
                    .then(
                    function(data) {
                        var comments = data['data'];
                        comments.reverse();
                        $scope.post.comments = comments;
                    },
                    function() {
                        console.log('error getting all comments');
                    });
            };

        }
    };
});
