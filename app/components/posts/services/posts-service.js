angular.module('postsModule')
    .factory('postsService', ['$http', function($http) {
        function getConfig() {
            var config = {};
            if(localStorage['sessionToken']) {
                config.headers = {};
                config.headers.Authorization = 'Bearer ' + localStorage['sessionToken'];
            }

            return config;
        };

        var baseUrl = 'http://softuni-social-network.azurewebsites.net/api/Posts';

        var postsRepo = {
            getPostById: function(postId) {
                return $http.get(baseUrl + '/' + postId, getConfig());
            },
            addPost: function(postContent, username) { // !!! api/posts - check service url
                var data = {
                    postContent: postContent,
                    username: username
                };
                return $http.post(baseUrl, data, getConfig());
            },
            editPost: function(postId, newContent) {
                var data = {
                    postContent: newContent
                };
                return $http.put(baseUrl + '/' + postId, data, getConfig());
            },
            deletePost: function(postId) {
                return $http.delete(baseUrl + '/' + postId, getConfig());
            }
        };

        return postsRepo;
    }]);