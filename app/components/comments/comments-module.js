angular.module('commentsModule', [])
    .config(['$routeProvider', function($routeProvider) {
    }])
    .constant('commentsServiceBaseUrl', {
        baseUrl: 'http://softuni-social-network.azurewebsites.net/api/posts'
    });