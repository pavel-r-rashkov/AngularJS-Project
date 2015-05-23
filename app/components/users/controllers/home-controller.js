angular.module('usersModule')
    .controller('homeController', function($scope, usersService, credentialsService, $location, notyService) {
        $scope.newUser = {};

        $scope.login = function(user) {
            usersService.login(user.username, user.password)
                .then(
                function(data) {
                    setLocalUserData(data);
                    $location.path('/' + user.username + '/wall');
                    notyService.success('logged in');
                },
                function() {
                    notyService.error('error logging in');
                });
        };

        $scope.register = function(user) {
            usersService.register(user.username, user.password, user.confirmPassword, user.name, user.email)
                .then(
                function(data) {
                    setLocalUserData(data);
                    $location.path('/' + user.username + '/wall');
                    notyService.success('successfully registered');
                },
                function(error) {
                    notyService.error(error['data']['modelState'][''][0]);
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
    });