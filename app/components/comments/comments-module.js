angular.module('commentsModule', [])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/comments', {
            templateUrl: 'components/comments/views/view4.html',
            controller: 'commentsController'
        });
    }]);