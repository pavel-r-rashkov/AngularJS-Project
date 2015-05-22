angular.module('friendsModule').directive('showFriendsPreview', function () {
    return {
        scope: {
            username: '=username'
        },
        templateUrl: 'components/friends/views/friends-preview.html',
        controller: function ($scope, friendsService, notyService) {
            var username = $scope.username;

            if(username === localStorage['username']) {
                friendsService.getMyFriendsPreview()
                    .then(
                    function(data) {
                        $scope.totalCount = data['data']['totalCount'];
                        $scope.friends = data['data']['friends'];
                    },
                    function() {
                        notyService.error('error getting friends preview');
                    });
            } else {
                friendsService.getFriendsPreview(username)
                    .then(
                    function(data) {
                        $scope.totalCount = data['data']['totalCount'];
                        $scope.friends = data['data']['friends'];
                    },
                    function() {
                        notyService.error('error getting friends preview');
                    });
            }
        }
    };
});
