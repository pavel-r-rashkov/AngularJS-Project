angular.module('commentsModule', [])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/comments', {
            templateUrl: 'components/comments/views/view4.html',
            controller: 'commentsController'
        });
    }])
    .constant('commentsServiceBaseUrl', {
        baseUrl: 'http://softuni-social-network.azurewebsites.net/api/posts'
    });