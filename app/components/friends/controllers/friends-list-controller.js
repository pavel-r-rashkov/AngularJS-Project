'use strict';

angular.module('friendsModule')
    .controller('friendsListController', function($scope, friendsService, $routeParams, notyService) {
        var username = $routeParams['user'];

        if(username === localStorage['username']) {
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
                    notyService.success('error getting friends list');
                });
        }
    });
