angular.module('postLikesModule').directive('showPostLikes', function () {
    return {
        scope: {
            post: '=post'
        },
        templateUrl: 'components/post-likes/views/post-likes.html',
        controller: function ($scope, $element, $attrs, postLikesService) {
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


        }
    };
});
