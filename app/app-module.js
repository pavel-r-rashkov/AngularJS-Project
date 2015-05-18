'use strict';

angular.module('myApp', [
    'ngRoute',
    'usersModule',
    'postsModule',
    'myApp.version',
    'commentLikesModule',
    'commentsModule',
    'friendsModule',
    'postLikesModule',
    'profilesModule',
    'navigationModule'
]).config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/view1'});
}]).run(function($rootScope, $location) {
    $rootScope.$on("$locationChangeStart", function(event) {
        if((localStorage['sessionToken'] && $location.path() === '/home') ||
            (!localStorage['sessionToken'] && $location.path() !== '/home')) {
            event.preventDefault();
        }
    });
});
