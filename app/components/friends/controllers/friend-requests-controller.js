'use strict';

angular.module('friendsModule')
    .controller('friendRequestsController', ['$scope', 'friendsService', function($scope, friendsService) {

        $scope.approveRequest = function(requestId) {
            friendsService.approveFriendRequest(requestId)
                .then(
                function () {
                    console.log('request accepted');
                    $scope.requests = $scope.requests.filter(function(element) {return element.id !== requestId});
                    $scope.requestsCount.count -= 1;
                },
                function (error) {
                    console.log('error accepting request');
                });
        };

        $scope.rejectRequest = function(requestId) {
            friendsService.rejectFriendRequest(requestId)
                .then(
                function () {
                    console.log('request rejected');
                    $scope.requests = $scope.requests.filter(function(element) {return element.id !== requestId});
                    $scope.requestsCount.count -= 1;
                },
                function (error) {
                    console.log('error rejecting request');
                });
        };
    }]);
