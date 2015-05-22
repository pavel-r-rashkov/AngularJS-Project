angular.module('postsModule').directive('editPost', function () {
    return {
        scope: {
            post: '=post'
        },
        templateUrl: 'components/posts/views/edit-post.html',
        controller: function ($scope, postsService, notyService) {

            $scope.editedPost = {
                postContent: $scope.post.postContent
            };

            $scope.editPost = function(post) {
                postsService.editPost($scope.post.id, post)
                    .then(
                    function(data) {
                        $scope.post.postContent = data['data']['content'];
                        notyService.success('post edited successfully');
                    },
                    function(error) {
                        notyService.error('error editing post');
                    });
            }
        }
    };
});