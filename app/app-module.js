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
])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/home'});
}])
.run(function($rootScope, $location) {
    $rootScope.$on("$locationChangeStart", function(event) {
        if((sessionStorage['sessionToken'] && $location.path() === '/home') ||
            (!sessionStorage['sessionToken'] && $location.path() !== '/home')) {
            event.preventDefault();
        }
    });
});
