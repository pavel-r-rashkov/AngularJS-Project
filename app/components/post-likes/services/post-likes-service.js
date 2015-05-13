angular.module('postLikesModule')
    .factory('postLikesService', ['$http', function($http) {
        function getConfig() {
            var config = {};
            if(localStorage['sessionToken']) {
                config.headers = {};
                config.headers.Authorization = 'Bearer ' + localStorage['sessionToken'];
            }

            return config;
        };

        var baseUrl = 'http://softuni-social-network.azurewebsites.net/api/Posts';

        var postLikesRepo = {
            getPostDetailedLikes: function(postId) {
                return $http.get(baseUrl + '/' + postId + '/likes', getConfig());
            },
            getPostPreviewLikes: function(postId) {
                return $http.get(baseUrl + '/' + postId + '/likes/preview', getConfig());
            },
            likePost: function(postId) {
                return $http.post(baseUrl + '/' + postId + '/likes', null, getConfig());
            },
            unlikePost: function(postId) {
                return $http.delete(baseUrl + '/' + postId + '/likes', getConfig());
            }
        };

        return postLikesRepo;
    }]);
