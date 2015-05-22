angular.module('postsModule').directive('showPost', function () {
    return {
        scope: {
            posts: '=',
            post: '='
        },
        templateUrl: 'components/posts/views/post.html',
        controller: function ($scope, postsService, credentialsService, notyService) {
            var currentUsername = credentialsService.getCurrentUser().username;
            $scope.showAddForm = false;
            $scope.showEditForm = false;
            $scope.userPreviewActive = false;

            $scope.canComment = (currentUsername === $scope.post.author.username) ||
                $scope.post.wallOwner.username === currentUsername ||
                $scope.post.wallOwner.isFriend ||
                $scope.post.author.isFriend;
            $scope.canEditPost = currentUsername === $scope.post.author.username;
            $scope.canDeletePost = (currentUsername === $scope.post.author.username) ||
                $scope.post.wallOwner.username === currentUsername;

            $scope.allCommentsShown = function() {
                return $scope.post.totalCommentsCount === $scope.post.comments.length;
            };

            $scope.postTitle = $scope.post.author.name + ' posted';
            if($scope.post.author.username !== $scope.post.wallOwner.username) {
                $scope.postTitle += ' on ' + $scope.post.wallOwner.name + '\'s wall';
            }

            $scope.deletePost = function(postId) {
                postsService.deletePost(postId)
                    .then(
                    function() {
                        $scope.posts = $scope.posts.filter(function(element) {return element.id !== postId;});
                        notyService.success('post deleted');
                    },
                    function(error) {
                        notyService.error('error deleting post');
                    });
            };

            $scope.toggleCommentForm = function() {
                $scope.showEditForm = false;
                $scope.showAddForm = !$scope.showAddForm;
            };

            $scope.togglePostEditForm = function() {
                $scope.showAddForm = false;
                $scope.showEditForm = !$scope.showEditForm;
            };

            $scope.toggleUserPreview = function() {
                $scope.userPreviewActive = !$scope.userPreviewActive;
            };

            $scope.toggleShowComments = function() {
                postsService.getPostComments($scope.post.id)
                    .then(
                    function(data) {
                        $scope.post.comments = data['data'];
                    },
                    function() {
                        notyService.error('error getting all comments');
                    });
            };
        }
    };
});
