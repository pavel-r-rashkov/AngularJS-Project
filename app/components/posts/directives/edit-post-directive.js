angular.module('postsModule').directive('editPost', function () {
    return {
        scope: {
            post: '=post'
        },
        templateUrl: 'components/posts/views/edit-post.html',
        controller: function ($scope, $element, $attrs, postsService) {

            $scope.editedPost = {
                postContent: $scope.postContent
            };

            $scope.editPost = function(post) {
                postsService.editPost($scope.post.id, post)
                    .then(
                    function(data) {

                        $scope.post.postContent = data['data']['content'];
                    },
                    function(error) {
                        console.log(error);
                        console.log('error editing post');
                    });
            }
        }
    };
});