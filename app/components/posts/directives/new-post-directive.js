angular.module('postsModule').directive('newPost', function () {
    return {
        scope: {
            posts: '=posts',
            wallOwner: '=wallOwner'
        },
        templateUrl: 'components/posts/views/new-post.html',
        controller: function ($scope, postsService, notyService, credentialsService) {
            var currentUser = credentialsService.getCurrentUser();
            $scope.author = {
                name: currentUser.name,
                username: currentUser.username
            };

            $scope.addPost = function(post) {
                post.username = $scope.wallOwner;
                postsService.addPost(post)
                    .then(
                    function(data) {
                        $scope.posts.unshift(data['data']);
                        $scope.post.postContent = '';
                        notyService.success('post added');
                    },
                    function(error) {
                        notyService.error('error adding post');
                    });
            }
        }
    };
});
