'use strict';

// Declare app level module which depends on views, and components
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
}]);
