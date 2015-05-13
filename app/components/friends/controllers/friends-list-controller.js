'use strict';

angular.module('friendsModule')
    .controller('friendsListController', ['$scope', 'friendsService', '$routeParams', function($scope, friendsService, $routeParams) {
        var username = $routeParams['user'];

        if(username === 'me') {
            friendsService.getFriends()
                .then(
                function(data) {
                    $scope.friends = data['data'];
                },
                function() {
                    console.log('error getting friends list');
                });
        } else {
            friendsService.getFriendsList(username)
                .then(
                function(data) {
                    $scope.friends = data['data'];
                },
                function() {
                    console.log('error getting friends list');
                });
        }

    }]);