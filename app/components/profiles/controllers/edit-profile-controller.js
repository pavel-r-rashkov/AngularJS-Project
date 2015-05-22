'use strict';

angular.module('profilesModule')
    .controller('editProfileController', function($scope, profilesService, credentialsService, $location, notyService) {
        profilesService.getMyData()
            .then(
            function(data) {
                $scope.user = data['data'];
            },
            function() {
                notyService.error('error loading user data');
            });

        $scope.editProfile = function(userData) {;
            profilesService.editProfile(userData)
                .then(
                function(data) {
                    credentialsService.setCurrentUser(userData['name'], userData['profileImageData']);
                    notyService.success('profile edited');
                    $location.path('/view1');
                },
                function(error) {
                    notyService.error('error editing profile');
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
            };

            fileReader.readAsDataURL(file);
        }

    });
