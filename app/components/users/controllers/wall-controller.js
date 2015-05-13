'use strict';

angular.module('usersModule')
    .controller('wallController', ['$scope', 'usersService', '$routeParams', '$location', function($scope, usersService, $routeParams, $location) {
        $scope.username = $routeParams['username'];

        usersService.getWall($routeParams['username'], '', 5)
            .then(
            function(data) {
                $scope.posts = data['data'];
            },
            function() {
                console.log('error getting wall data');
            });
    }]);