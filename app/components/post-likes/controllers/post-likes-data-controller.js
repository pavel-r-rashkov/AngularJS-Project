'use strict';

angular.module('postLikesModule')
    .controller('postLikesDataController', function($scope, postLikesService, $routeParams, notyService) {
        var postId = $routeParams['postId'];

        postLikesService.getPostDetailedLikes(postId)
            .then(
            function(data) {
                $scope.users = data['data'].map(
                    function(element) {
                        return element['user'];
                    });
            },
            function(error) {
                notyService.error('error getting post likes data');
            });
    });
