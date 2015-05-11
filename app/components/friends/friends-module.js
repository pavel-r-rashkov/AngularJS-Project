angular.module('friendsModule', [])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/friends', {
            templateUrl: 'components/friends/views/view6.html',
            controller: 'friendsController'
        });
    }]);
