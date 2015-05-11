angular.module('postsModule', [])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/posts', {
            templateUrl: 'components/posts/views/view2.html',
            controller: 'postsController'
        });
    }]);
