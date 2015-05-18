angular.module('postLikesModule', [])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/postLikes', {
            templateUrl: 'components/post-likes/views/view3.html',
            controller: 'postLikesController'
        }).when('/posts/:postId/likes', {
            templateUrl: 'components/post-likes/views/post-likes-data.html',
            controller: 'postLikesDataController'
        });
    }]);
