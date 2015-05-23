'use strict';

angular.module('friendsModule')
    .controller('friendsListController', function($scope, friendsService, $routeParams, credentialsService) {
        var username = $routeParams['user'];
        var currentUsername = credentialsService.getCurrentUser().username;

        if(username === currentUsername) {
            friendsService.getFriends()
                .then(
                function(data) {
                    $scope.friends = data['data'];
                },
                function(error) {
                    notyService.error('error getting friends list');
                });
        } else {
            friendsService.getFriendsList(username)
                .then(
                function(data) {
                    $scope.friends = data['data'];
                },
                function(error) {
                    notyService.error('error getting friends list');
                });
        }
    });
