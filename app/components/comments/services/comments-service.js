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
            getPostComments: function(postId) {
                return $http.get(baseUrl + '/' + postId + '/comments', getConfig());
            },
            addComment: function(postId, content) {
                var data = {
                    commentContent: content
                };
                return $http.post(baseUrl + '/' + postId + '/comments', data, getConfig());
            },
            editComment: function(postId, commentId, content) {
                var data = {
                    commentContent: content
                };
                return $http.put(baseUrl + '/' + postId + '/comments/' + commentId, data, getConfig());
            },
            deleteComment: function(postId, commentId) {
                return $http.delete(baseUrl + '/' + postId + '/comments/' + commentId, getConfig());
            }
        };

        return commentsRepo;
    }]);
