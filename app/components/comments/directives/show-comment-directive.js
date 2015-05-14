angular.module('commentsModule').directive('showComment', function () {
    return {
        scope: {
            //commentsUpdate: '&',
            comment: '=comment',
        },
        templateUrl: 'components/comments/views/comment.html',
        controller: function ($scope, $element, $attrs, postsService) {
            //$scope.deletePost = function(postId) {
            //    postsService.deletePost(postId)
            //        .then(
            //        function() {
            //            $scope.postsUpdate();
            //        },
            //        function() {
            //            console.log('error deleting post');
            //        });
            //};




        }
    };
});
