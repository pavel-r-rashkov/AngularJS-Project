angular.module('usersModule')
    .controller('homeController', ['$scope', 'usersService', '$location', function($scope, usersService, $location) {
        $scope.login = function(user) {
            usersService.login(user.username, user.password)
                .then(
                function() {
                    $location.path('/view1');
                },
                function() {
                    console.log('error logging in');
                });
        };

        $scope.newUser = {};

        $scope.register = function(user) {
            usersService.register(user.username, user.password, user.confirmPassword, user.name, user.email)
                .then(
                function() {
                    $location.path('/view1');
                },
                function() {
                    console.log('error registering user');
                });
        };
    }]);