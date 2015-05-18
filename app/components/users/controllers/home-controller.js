angular.module('usersModule')
    .controller('homeController', ['$scope', 'usersService', 'credentialsService', '$location', function($scope, usersService, credentialsService, $location) {
        $scope.login = function(user) {
            usersService.login(user.username, user.password)
                .then(
                function(data) {
                    setLocalUserData(data);
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
                function(data) {
                    setLocalUserData(data);
                    $location.path('/view1');
                },
                function() {
                    console.log('error registering user');
                });
        };

        function setLocalUserData(data) {
            credentialsService.setAccessToken(data['data']['access_token']);
            usersService.getUserPreviewData(data['data']['userName'])
                .then(
                function(data) {
                    credentialsService.setCurrentUser(
                        data['data']['name'],
                        data['data']['profileImageData'],
                        data['data']['username']);
                },
                function() {
                    console.log('error getting user preview data');
                });
        }
    }]);