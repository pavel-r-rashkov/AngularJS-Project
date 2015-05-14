angular.module('usersModule').directive('showUserPreview', function () {
    return {
        scope: {
            username: '=username'
        },
        templateUrl: 'components/users/views/user-preview.html',
        controller: function ($scope, $element, $attrs, usersService, friendsService) {
            usersService.getUserPreviewData($scope.username)
                .then(
                function(data) {
                    $scope.userData = data['data'];
                },
                function() {
                    console.log('error getting user preview data');
                });

            $scope.sendFriendRequest = function(username) {
                friendsService.sendFriendRequest(username)
                    .then(
                    function(data) {

                    },
                    function() {
                        console.log('error sending friend request');
                    });
            }

        }
    };
});
