angular.module('postsModule')
    .factory('postsService', function($http, credentialsService, postsServiceBaseUrl) {
        var baseUrl = postsServiceBaseUrl.baseUrl;

        var postsRepo = {
            getPostById: function(postId) {
                return $http.get(baseUrl + '/' + postId, credentialsService.getConfig());
            },
            addPost: function(post) {
                return $http.post(baseUrl, post, credentialsService.getConfig());
            },
            editPost: function(postId, post) {
                return $http.put(baseUrl + '/' + postId, post, credentialsService.getConfig());
            },
            deletePost: function(postId) {
                return $http.delete(baseUrl + '/' + postId, credentialsService.getConfig());
            },
            getPostComments: function(postId) {
                return $http.get(baseUrl + '/' + postId + '/comments', credentialsService.getConfig());
            }
        };

        return postsRepo;
    });