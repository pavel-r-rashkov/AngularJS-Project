angular.module('friendsModule').directive('showFriendsPreview', function () {
    return {
        scope: {
            username: '=username'
        },
        templateUrl: 'components/friends/views/friends-preview.html',
        controller: function ($scope, friendsService, notyService, credentialsService) {
            var username = $scope.username;
            var currentUsername = credentialsService.getCurrentUser().username;

            if(username === currentUsername) {
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
