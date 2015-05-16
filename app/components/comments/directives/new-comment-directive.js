angular.module('commentsModule').directive('newComment', function () {
    return {
        scope: {
            postId: '=postId',
            comments: '=comments',
            commentsCount: '=commentsCount'
        },
        templateUrl: 'components/comments/views/new-comment.html',
        controller: function ($scope, $element, $attrs, commentsService) {

            $scope.addComment = function(comment) {
                commentsService.addComment($scope.postId, comment)
                    .then(
                    function(data) {
                        $scope.comment.commentContent = '';
                        if($scope.commentsCount <= 2 || $scope.comments.length >= 4) {
                            $scope.comments.push(data['data']);
                        }
                        $scope.commentsCount++;
                    },
                    function() {
                        console.log('error adding comment');
                    });
            }
        }
    };
});
