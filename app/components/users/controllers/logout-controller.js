'use strict';

angular.module('usersModule')
    .controller('logoutController', ['usersService', '$location', function(usersService, $location) {
        usersService.logout()
            .then(
            function() {
                $location.path('/home');
            },
            function() {
                console.log('error logging out');
            });
    }]);