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
                        $scope.comments.push(data['data']);
                        //$scope.appendComment({newComment: data['data']});
                        $scope.comment.commentContent = '';
                        $scope.commentsCount++;
                    },
                    function() {
                        console.log('error adding comment');
                    });
            }


        }
    };
});
