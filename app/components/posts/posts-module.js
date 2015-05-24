angular.module('postsModule', [])
    .config(['$routeProvider', function($routeProvider) {
    }])
    .constant('postsServiceBaseUrl', {
        baseUrl: 'http://softuni-social-network.azurewebsites.net/api/Posts'
    });
