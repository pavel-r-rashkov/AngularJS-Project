angular.module('postsModule')
    .factory('postsService', ['$http', function($http) {
        function getConfig() {
            var config = {};
            if(localStorage['sessionToken']) {
                config.headers = {};
                config.headers.Authorization = 'Bearer ' + localStorage['sessionToken'];
            }

            return config;
        }

        var baseUrl = 'http://softuni-social-network.azurewebsites.net/api/Posts';

        var postsRepo = {
            getPostById: function(postId) {
                return $http.get(baseUrl + '/' + postId, getConfig());
            },
            addPost: function(post) { // !!! api/posts - check service url
                return $http.post(baseUrl, post, getConfig());
            },
            editPost: function(postId, post) {
                return $http.put(baseUrl + '/' + postId, post, getConfig());
            },
            deletePost: function(postId) {
                return $http.delete(baseUrl + '/' + postId, getConfig());
            },
            getPostComments: function(postId) {
                return $http.get(baseUrl + '/' + postId + '/comments', getConfig());
            }
        };

        return postsRepo;
    }]);