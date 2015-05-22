angular.module('usersModule').directive('showUserPreview', function () {
    return {
        scope: {
            username: '=username'
        },
        templateUrl: 'components/users/views/user-preview.html',
        controller: function ($scope, $element, $attrs, usersService, friendsService, credentialsService) {
            var currentUsername = credentialsService.getCurrentUser().username;

            usersService.getUserPreviewData($scope.username)
                .then(
                function(data) {
                    $scope.userData = data['data'];
                    $scope.friendStatus = data['data']['hasPendingRequest'] ? 'pending' : 'notFriend';
                    $scope.friendStatus = data['data']['isFriend'] ? 'friend' : $scope.friendStatus;
                    $scope.friendStatus = $scope.username === currentUsername ? '': $scope.friendStatus;
                },
                function() {
                    console.log('error getting user preview data');
                });

            $scope.sendFriendRequest = function(username) {
                friendsService.sendFriendRequest(username)
                    .then(
                    function(data) {
                        console.log('request sent');
                    },
                    function() {
                        console.log('error sending friend request');
                    });
            }

        }
    };
});
