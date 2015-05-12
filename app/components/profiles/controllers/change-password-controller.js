'use strict';

angular.module('profilesModule')
    .controller('changePasswordController', ['$scope', 'profilesService', '$location', function($scope, profilesService, $location) {
        $scope.changePassword = function(passwordData) {
            profilesService.changePassword(passwordData)
                .then(
                function() {
                    $location.path('/view1');
                },
                function() {
                    console.log('error changing password');
                });
        }
    }]);
