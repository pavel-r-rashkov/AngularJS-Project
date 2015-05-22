angular.module('commentLikesModule', [])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/commentLikes', {
            templateUrl: 'components/comment-likes/views/view5.html',
            controller: 'commentLikesController'
        }).when('/posts/:postId/comments/:commentId/likes', {
            templateUrl: 'components/comment-likes/views/comment-likes-data.html',
            controller: 'commentLikesDataController'
        });
    }])
    .constant('commentLikesBaseUrl', {
        baseUrl: 'http://softuni-social-network.azurewebsites.net/api/posts'
    });