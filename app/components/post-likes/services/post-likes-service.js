angular.module('postLikesModule')
    .factory('postLikesService', ['$http', 'credentialsService', function($http, credentialsService) {
        var baseUrl = 'http://softuni-social-network.azurewebsites.net/api/Posts';

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
    }]);
