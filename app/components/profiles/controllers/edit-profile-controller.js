'use strict';

angular.module('profilesModule')
    .controller('editProfileController', ['$scope', 'profilesService', '$location', function($scope, profilesService, $location) {
        profilesService.getMyData()
            .then(
            function(data) {
                $scope.user = data['data'];
            },
            function() {
                console.log('error loading user data');
            });

        $scope.editProfile = function(userData) {
            profilesService.editProfile(userData)
                .then(
                function() {
                    $location.path('/view1');
                },
                function() {
                    console.log('error editing profile');
                });
        }
    }]);
