angular.module('friendsModule').directive('showFriendRequests', function () {
    return {
        scope: {
            requests: '=requests',
            requestsCount: '=requestsCount'
        },
        templateUrl: 'components/friends/views/friend-requests.html',
        controller: function ($scope, friendsService, notyService) {
            $scope.approveRequest = function(requestId) {
                friendsService.approveFriendRequest(requestId)
                    .then(
                    function () {
                        $scope.requests = $scope.requests.filter(function(element) {return element.id !== requestId});
                        $scope.requestsCount.count -= 1;
                        notyService.success('request accepted');
                    },
                    function (error) {
                        notyService.error('error accepting request');
                    });
            };

            $scope.rejectRequest = function(requestId) {
                friendsService.rejectFriendRequest(requestId)
                    .then(
                    function () {
                        $scope.requests = $scope.requests.filter(function(element) {return element.id !== requestId});
                        $scope.requestsCount.count -= 1;
                        notyService.success('request rejected');
                    },
                    function (error) {
                        notyService.error('error rejecting request');
                    });
            };
        }
    };
});

