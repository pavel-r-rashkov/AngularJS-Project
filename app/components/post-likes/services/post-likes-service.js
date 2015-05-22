angular.module('postLikesModule')
    .factory('postLikesService', function($http, credentialsService, postLikesServiceBaseUrl) {
        var baseUrl = postLikesServiceBaseUrl.baseUrl;

        var postLikesRepo = {
            getPostDetailedLikes: function(postId) {
                return $http.get(baseUrl + '/' + postId + '/likes', credentialsService.getConfig());
            },
            getPostPreviewLikes: function(postId) {
                return $http.get(baseUrl + '/' + postId + '/likes/preview', credentialsService.getConfig());
            },
            likePost: function(postId) {
                return $http.post(baseUrl + '/' + postId + '/likes', null, credentialsService.getConfig());
            },
            unlikePost: function(postId) {
                return $http.delete(baseUrl + '/' + postId + '/likes', credentialsService.getConfig());
            }
        };

        return postLikesRepo;
    });
