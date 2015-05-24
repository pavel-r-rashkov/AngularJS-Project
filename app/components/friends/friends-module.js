angular.module('friendsModule', [])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
        .when('/:user/friends', {
            templateUrl: 'components/friends/views/friends-list.html',
            controller: 'friendsListController'
        });
    }])
    .constant('friendsServiceBaseUrl', {
        baseUrl: 'http://softuni-social-network.azurewebsites.net/api'
    });
