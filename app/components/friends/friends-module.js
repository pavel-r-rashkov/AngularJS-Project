angular.module('friendsModule', [])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/friendsaaaa', {
            templateUrl: 'components/friends/views/view6.html',
            controller: 'friendsController'
        })
        .when('/:user/friends', {
            templateUrl: 'components/friends/views/friends-list.html',
            controller: 'friendsListController'
        });
    }])
    .constant('friendsServiceBaseUrl', {
        baseUrl: 'http://softuni-social-network.azurewebsites.net/api'
    });
