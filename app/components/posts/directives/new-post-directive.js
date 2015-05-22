angular.module('postsModule').directive('newPost', function (notyService) {
    return {
        scope: {
            posts: '=posts',
            wallOwner: '=wallOwner'
        },
        templateUrl: 'components/posts/views/new-post.html',
        controller: function ($scope, $element, $attrs, postsService) {

            $scope.author = localStorage['username'];

            $scope.addPost = function(post) {
                post.username = $scope.wallOwner;
                postsService.addPost(post)
                    .then(
                    function(data) {
                        $scope.posts.unshift(data['data']);
                        $scope.post.postContent = '';
                        notyService.success('Post added');
                    },
                    function(error) {
                        console.log(error);
                        console.log('error adding post');
                    });
            }
        }
    };
});
