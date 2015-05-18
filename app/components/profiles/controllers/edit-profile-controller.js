'use strict';

angular.module('profilesModule')
    .controller('editProfileController', ['$scope', 'profilesService', 'credentialsService', '$location', function($scope, profilesService, credentialsService, $location) {
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
                function(data) {
                    credentialsService.setCurrentUser(userData['name'], userData['profileImageData']);
                    $location.path('/view1');
                },
                function(error) {
                    console.log('error editing profile');
                });
        };

        $scope.setImageFile = function(element, propertyName) {
            $scope.$apply(function($scope) {
                var profileImageFile = element.files[0];
                getBinaryData(profileImageFile, function(data) {$scope.user[propertyName] = data;});
            });
        };

        function getBinaryData(file, onLoadCallback) {
            var fileReader = new FileReader();
            fileReader.onload = function(e) {
                var data = e.target.result;
                var tokens = data.split(',');
                $scope.$apply(function () {
                    onLoadCallback(tokens[1]);
                });
            };

            fileReader.onprogress = function(e) {
                console.log(e);
            };

            fileReader.readAsDataURL(file);
        }

    }]);
