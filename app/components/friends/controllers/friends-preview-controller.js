'use strict';

angular.module('friendsModule')
    .controller('friendsPreviewController', ['$scope', 'friendsService', '$routeParams', function($scope, friendsService, $routeParams) {
        var username = $routeParams['user'];

        if(username === 'me') {
            friendsService.getFriends()
                .then(
                function(data) {
                    $scope.totalCount = data['data']['totalCount'];
                    $scope.username = localStorage['username'];
                    $scope.friends = data['data'];
                },
                function() {
                    console.log('error getting friends list');
                });
        } else {
            friendsService.getFriendsPreview(username)
                .then(
                function(data) {
                    $scope.totalCount = data['data']['totalCount'];
                    $scope.username = localStorage['username'];
                    $scope.friends = data['data']['friends'];
                },
                function() {
                    console.log('error getting friends list');
                });
        }

    }]);
