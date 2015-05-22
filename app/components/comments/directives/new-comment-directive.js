angular.module('commentsModule').directive('newComment', function () {
    return {
        scope: {
            post: '=post'
        },
        templateUrl: 'components/comments/views/new-comment.html',
        controller: function ($scope, $element, $attrs, commentsService) {

            $scope.addComment = function(comment) {
                commentsService.addComment($scope.post.id, comment)
                    .then(
                    function(data) {
                        $scope.comment.commentContent = '';
                        $scope.post.comments.unshift(data['data']);
                        $scope.post.totalCommentsCount++;
                    },
                    function() {
                        console.log('error adding comment');
                    });
            }
        }
    };
});
