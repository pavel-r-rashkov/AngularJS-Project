angular.module('commentsModule').directive('showComment', function () {
    return {
        scope: {
            comment: '=comment',
            postId: '=postId'
        },
        templateUrl: 'components/comments/views/comment.html',
        controller: function ($scope, $element, $attrs, postsService) {

        }
    };
});
