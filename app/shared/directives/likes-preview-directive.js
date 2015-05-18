angular.module('myApp').directive('showLikesPreview', function () {
    return {
        scope: {
            users: '=users'
        },
        templateUrl: 'shared/views/likes-preview.html',
        controller: function ($scope, $element, $attrs) {

        }
    };
});
