angular.module('postLikesModule').directive('showPostLikes', function () {
    return {
        scope: {
            post: '=post',
            canLike: '=canLike'
        },
        templateUrl: 'components/post-likes/views/post-likes.html',
        controller: function ($scope, $element, $attrs, postLikesService) {
            $scope.showLikesPreview = false;

            $scope.likePost = function(postId) {
                postLikesService.likePost(postId)
                    .then(
                    function(data) {
                        $scope.post.liked = true;
                        $scope.post.likesCount = data['data']['likesCount'];
                    },
                    function(error) {
                        console.log('error liking post');
                    });
            };

            $scope.unlikePost = function(postId) {
                postLikesService.unlikePost(postId)
                    .then(
                    function(data) {
                        $scope.post.liked = false;
                        $scope.post.likesCount = data['data']['likesCount'];
                    },
                    function() {
                        console.log('error unliking post');
                    });
            };

            function loadLikesPreview(postId) {
                postLikesService.getPostPreviewLikes(postId)
                    .then(
                    function(data) {
                        $scope.likesUsersData = data['data']['postLikes'].map(
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
                    loadLikesPreview($scope.post.id);
                }
            };
        }
    };
});
