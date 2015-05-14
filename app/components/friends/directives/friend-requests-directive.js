angular.module('friendsModule').directive('showFriendRequests', function () {
    return {
        scope: {
            requests: '=requests',
            requestsCount: '=requestsCount'
        },
        templateUrl: 'components/friends/views/friend-requests.html',
        controller: function ($scope, $element, $attrs, friendsService) {
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
        }
    };
});

