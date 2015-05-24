angular.module('postLikesModule', [])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
        .when('/posts/:postId/likes', {
            templateUrl: 'components/post-likes/views/post-likes-data.html',
            controller: 'postLikesDataController'
        });
    }])
    .constant('postLikesServiceBaseUrl', {
        baseUrl: 'http://softuni-social-network.azurewebsites.net/api/Posts'
    });
