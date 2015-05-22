angular.module('commentsModule')
    .factory('commentsService', function($http, credentialsService, commentsServiceBaseUrl) {
        var baseUrl = commentsServiceBaseUrl.baseUrl;

        var commentsRepo = {
            addComment: function(postId, comment) {
                return $http.post(baseUrl + '/' + postId + '/comments', comment, credentialsService.getConfig());
            },
            editComment: function(postId, commentId, comment) {
                return $http.put(baseUrl + '/' + postId + '/comments/' + commentId, comment, credentialsService.getConfig());
            },
            deleteComment: function(postId, commentId) {
                return $http.delete(baseUrl + '/' + postId + '/comments/' + commentId, credentialsService.getConfig());
            }
        };

        return commentsRepo;
    });
