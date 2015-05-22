angular.module('myApp').directive('showUsersResults', function () {
    return {
        scope: {
            users: '=users'
        },
        templateUrl: 'shared/views/users-results.html',
        controller: function ($scope) {

        }
    };
});
