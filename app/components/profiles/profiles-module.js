angular.module('profilesModule', [])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/profile/changepassword', {
            templateUrl: 'components/profiles/views/change-password.html',
            controller: 'changePasswordController'
        })
        .when('/profile/edit', {
            templateUrl: 'components/profiles/views/edit-profile.html',
            controller: 'editProfileController'
        })
        .when('/profile/feed', {
            templateUrl: 'components/profiles/views/news-feed.html',
            controller: 'newsFeedController'
        })
    }]);
