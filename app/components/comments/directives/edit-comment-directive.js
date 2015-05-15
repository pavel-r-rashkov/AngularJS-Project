angular.module('commentsModule').directive('editComment', function () {
    return {
        scope: {
            comment: '=comment',
            postId: '=postId'
        },
        templateUrl: 'components/comments/views/edit-comment.html',
        controller: function ($scope, $element, $attrs, commentsService) {

            $scope.editedComment = {
                commentContent: $scope.comment.commentContent
            };

            $scope.editComment = function(comment) {
                commentsService.editComment($scope.postId, $scope.comment.id, comment)
                    .then(
                    function(data) {
                        $scope.comment.commentContent = data['data']['commentContent'];
                    },
                    function(error) {
                        console.log(error);
                        console.log('error editing comment');
                    });
            }
        }
    };
});
