angular.module('friendsModule')
    .factory('friendsService', ['$http', 'credentialsService', function($http, credentialsService) {
        var baseUrl = 'http://softuni-social-network.azurewebsites.net/api';

        var friendsRepo = {
            getFriends: function() {
                return $http.get(baseUrl + '/me/friends', credentialsService.getConfig());
            },
            getMyFriendsPreview: function() {
                return $http.get(baseUrl + '/me/friends/preview', credentialsService.getConfig());
            },
            getFriendRequests: function() {
                return $http.get(baseUrl + '/me/requests', credentialsService.getConfig());
            },
            sendFriendRequest: function(username) {
                return $http.post(baseUrl + '/me/requests/' + username, null, credentialsService.getConfig());
            },
            approveFriendRequest: function(requestId) {
                return $http.put(baseUrl + '/me/requests/' + requestId + '?status=approved', null, credentialsService.getConfig());
            },
            rejectFriendRequest: function(requestId) {
                return $http.put(baseUrl + '/me/requests/' + requestId + '?status=rejected', null, credentialsService.getConfig());
            },
            getFriendsList: function(username) {
                return $http.get(baseUrl + '/users/' + username + '/friends', credentialsService.getConfig());
            },
            getFriendsPreview: function(username) {
                return $http.get(baseUrl + '/users/' + username + '/friends/preview', credentialsService.getConfig());
            }
        };

        return friendsRepo;
    }]);
