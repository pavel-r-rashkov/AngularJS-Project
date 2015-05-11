angular.module('commentLikesModule', [])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/commentLikes', {
            templateUrl: 'components/comment-likes/views/view5.html',
            controller: 'commentLikesController'
        });
    }]);