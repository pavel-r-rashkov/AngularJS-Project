angular.module('usersModule', [])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
        .when('/', {
            templateUrl: 'components/users/views/home.html',
            controller: 'homeController'
        })
        .when('/:username/wall', {
            templateUrl: 'components/users/views/wall.html',
            controller: 'wallController'
        })
    }])
    .constant('usersServiceBaseUrl', {
        baseUrl: 'http://softuni-social-network.azurewebsites.net/api/users'
    });