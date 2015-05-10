angular.module('usersModule', [])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'components/users/views/view1.html',
            controller: 'usersController'
        });
    }]);