angular.module('profilesModule', [])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/profiles', {
            templateUrl: 'components/profiles/views/view9.html',
            controller: 'profilesController'
        });
    }]);
