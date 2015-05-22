angular.module('commentLikesModule').directive('showCommentLikes', function () {
    return {
        scope: {
            comment: '=comment',
            post: '=post'
        },
        templateUrl: 'components/comment-likes/views/comment-likes.html',
        controller: function ($scope, $element, $attrs, commentLikesService, credentialsService) {
            $scope.showLikesPreview = false;

            var currentUsername = credentialsService.getCurrentUser().username;
            $scope.canLike = (currentUsername === $scope.post.author.username) ||
                $scope.post.wallOwner.username === currentUsername ||
                $scope.post.wallOwner.isFriend ||
                $scope.post.author.isFriend;

            $scope.likeComment = function(commentId) {
                commentLikesService.likeComment($scope.post.id, commentId)
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
                commentLikesService.unlikeComment($scope.post.id, commentId)
                    .then(
                    function(data) {
                        $scope.comment.liked = false;
                        $scope.comment.likesCount = data['data']['likesCount'];
                    },
                    function() {
                        console.log('error unlike comment');
                    });
            };

            function loadLikesPreview(postId, commentId) {
                commentLikesService.getCommentPreviewLikes(postId, commentId)
                    .then(
                    function(data) {
                        $scope.likesUsersData = data['data']['commentLikes'].map(
                            function(element) {
                                return element['user'];
                            });
                    },
                    function() {
                        console.log('error loading likes preview');
                    });
            }

            $scope.toggleLikesPreview = function() {
                $scope.showLikesPreview = !$scope.showLikesPreview;
                if($scope.showLikesPreview) {
                    loadLikesPreview($scope.post.id, $scope.comment.id);
                }
            };


        }
    };
});
