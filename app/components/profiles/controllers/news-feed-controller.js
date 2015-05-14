'use strict';

angular.module('profilesModule')
    .controller('newsFeedController', ['$scope', 'profilesService', function($scope, profilesService) {
        $scope.username = localStorage['username'];

        $scope.showPosts = function() {
            profilesService.getNewsFeed('', 5)
                .then(function (data) {
                    $scope.posts = data['data'];
                },
                function () {
                    console.log('error loading user\'s news feed');
                });

        };

        $scope.showPosts();
    }]);
