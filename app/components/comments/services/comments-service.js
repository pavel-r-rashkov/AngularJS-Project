angular.module('commentsModule')
    .factory('commentsService', ['$http', 'credentialsService', function($http, credentialsService) {
        var baseUrl = 'http://softuni-social-network.azurewebsites.net/api/posts';

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
    }]);
