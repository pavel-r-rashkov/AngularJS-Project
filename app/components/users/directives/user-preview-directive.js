angular.module('usersModule').directive('showUserPreview', function () {
    return {
        scope: {
            username: '=username'
        },
        templateUrl: 'components/users/views/user-preview.html',
        controller: function ($scope, usersService, friendsService, credentialsService, notyService) {
            var currentUsername = credentialsService.getCurrentUser().username;

            usersService.getUserPreviewData($scope.username)
                .then(
                function(data) {
                    $scope.userData = data['data'];
                    $scope.friendStatus = data['data']['hasPendingRequest'] ? 'pending' : 'notFriend';
                    $scope.friendStatus = data['data']['isFriend'] ? 'friend' : $scope.friendStatus;
                    $scope.friendStatus = $scope.username === currentUsername ? '': $scope.friendStatus;
                },
                function(error) {
                });

            $scope.sendFriendRequest = function(username) {
                friendsService.sendFriendRequest(username)
                    .then(
                    function(data) {
                        notyService.success('request sent');
                    },
                    function(error) {
                        notyService.error('error sending friend request');
                    });
            }

        }
    };
});
