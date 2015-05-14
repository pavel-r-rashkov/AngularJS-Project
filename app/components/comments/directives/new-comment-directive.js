angular.module('commentsModule').directive('newComment', function () {
    return {
        scope: {
            postId: '=postId',
            appendComment: '&'
        },
        templateUrl: 'components/comments/views/new-comment.html',
        controller: function ($scope, $element, $attrs, commentsService) {

            $scope.addComment = function(comment) {
                commentsService.addComment($scope.postId, comment)
                    .then(
                    function(data) {
                        $scope.appendComment({newComment: data['data']});
                    },
                    function() {
                        console.log('error adding comment');
                    });
            }


        }
    };
});
