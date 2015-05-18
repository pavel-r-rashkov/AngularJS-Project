angular.module('postsModule')
    .factory('postsService', ['$http', 'credentialsService', function($http, credentialsService) {
        var baseUrl = 'http://softuni-social-network.azurewebsites.net/api/Posts';

        var postsRepo = {
            getPostById: function(postId) {
                return $http.get(baseUrl + '/' + postId, credentialsService.getConfig());
            },
            addPost: function(post) { // !!! api/posts - check service url
                return $http.post(baseUrl, post, getConfig());
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
    }]);