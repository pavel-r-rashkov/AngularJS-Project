'use strict';

angular.module('postsModule')
    .controller('newPostController', ['$scope', 'postsService', function($scope, postsService) {
        $scope.author = localStorage['username'];

        $scope.addPost = function(post) {
            post.username = $scope.username;
            postsService.addPost(post)
                .then(
                function() {

                },
                function() {
                    console.log('error adding post');
                });
        }
    }]);
