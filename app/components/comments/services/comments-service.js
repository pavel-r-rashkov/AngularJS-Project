angular.module('commentsModule')
    .factory('commentsService', ['$http', function($http) {
        function getConfig() {
            var config = {};
            if(localStorage['sessionToken']) {
                config.headers = {};
                config.headers.Authorization = 'Bearer ' + localStorage['sessionToken'];
            }

            return config;
        };

        var baseUrl = 'http://softuni-social-network.azurewebsites.net/api/posts';

        var commentsRepo = {
            addComment: function(postId, comment) {
                return $http.post(baseUrl + '/' + postId + '/comments', comment, getConfig());
            },
            editComment: function(postId, commentId, comment) {
                return $http.put(baseUrl + '/' + postId + '/comments/' + commentId, comment, getConfig());
            },
            deleteComment: function(postId, commentId) {
                return $http.delete(baseUrl + '/' + postId + '/comments/' + commentId, getConfig());
            }
        };

        return commentsRepo;
    }]);
