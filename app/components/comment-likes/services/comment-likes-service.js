angular.module('commentLikesModule')
    .factory('commentLikesService', ['$http', function($http) {
        function getConfig() {
            var config = {};
            if(localStorage['sessionToken']) {
                config.headers = {};
                config.headers.Authorization = 'Bearer ' + localStorage['sessionToken'];
            }

            return config;
        };

        var baseUrl = 'http://softuni-social-network.azurewebsites.net/api/posts';

        var commentLikesRepo = {
            getCommentDetailedLikes: function(postId, commentId) {
                return $http.delete(baseUrl + '/' + postId + '/comments/' + commentId + '/likes', getConfig());
            },
            getCommentPreviewLikes: function(postId, commentId) {
                return $http.delete(baseUrl + '/' + postId + '/comments/' + commentId + '/likes/preview', getConfig());
            },
            likeComment: function(postId, commentId) {
                return $http.post(baseUrl + '/' + postId + '/comments/' + commentId + '/likes', null, getConfig());
            },
            unlikeComment: function(postId, commentId) {
                return $http.delete(baseUrl + '/' + postId + '/comments/' + commentId + '/likes', getConfig());
            }
        };

        return commentLikesRepo;
    }]);
