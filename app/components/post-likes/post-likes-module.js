angular.module('postLikesModule', [])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/postLikes', {
            templateUrl: 'components/post-likes/views/view3.html',
            controller: 'postLikesController'
        });
    }]);
