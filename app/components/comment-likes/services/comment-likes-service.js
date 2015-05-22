angular.module('commentLikesModule')
    .factory('commentLikesService', function($http, credentialsService, commentLikesBaseUrl) {
        var baseUrl = commentLikesBaseUrl.baseUrl;

        var commentLikesRepo = {
            getCommentDetailedLikes: function(postId, commentId) {
                return $http.get(baseUrl + '/' + postId + '/comments/' + commentId + '/likes', credentialsService.getConfig());
            },
            getCommentPreviewLikes: function(postId, commentId) {
                return $http.get(baseUrl + '/' + postId + '/comments/' + commentId + '/likes/preview', credentialsService.getConfig());
            },
            likeComment: function(postId, commentId) {
                return $http.post(baseUrl + '/' + postId + '/comments/' + commentId + '/likes', null, credentialsService.getConfig());
            },
            unlikeComment: function(postId, commentId) {
                return $http.delete(baseUrl + '/' + postId + '/comments/' + commentId + '/likes', credentialsService.getConfig());
            }
        };

        return commentLikesRepo;
    });
