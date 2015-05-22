'use strict';

angular.module('profilesModule')
    .controller('changePasswordController', function($scope, profilesService, $location, notyService) {
        $scope.changePassword = function(passwordData) {
            profilesService.changePassword(passwordData)
                .then(
                function() {
                    notyService.success('password changed');
                    $location.path('/view1');
                },
                function(error) {
                    notyService.error('error changing password');
                });
        }
    });
