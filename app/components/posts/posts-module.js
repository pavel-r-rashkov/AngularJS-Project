angular.module('postsModule', [])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/posts', {
            templateUrl: 'components/posts/views/view2.html',
            controller: 'postsController'
        });
    }])
    .constant('postsServiceBaseUrl', {
        baseUrl: 'http://softuni-social-network.azurewebsites.net/api/Posts'
    });
