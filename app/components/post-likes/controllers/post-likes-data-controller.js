'use strict';

angular.module('postLikesModule')
    .controller('postLikesDataController', ['$scope', 'postLikesService', '$routeParams', function($scope, postLikesService, $routeParams) {
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
                console.log('error getting post likes data');
            });
    }]);
