angular.module('friendsModule')
    .factory('friendsService', ['$http', function($http) {
        function getConfig() {
            var config = {};
            if(localStorage['sessionToken']) {
                config.headers = {};
                config.headers.Authorization = 'Bearer ' + localStorage['sessionToken'];
            }

            return config;
        };

        var baseUrl = 'http://softuni-social-network.azurewebsites.net/api';

        var friendsRepo = {
            getFriends: function() {
                return $http.get(baseUrl + '/me/friends', getConfig());
            },
            getFriendRequests: function() {
                return $http.get(baseUrl + '/me/requests', getConfig());
            },
            sendFriendRequest: function(username) {
                return $http.post(baseUrl + '/me/requests/' + username, null, getConfig());
            },
            approveFriendRequest: function(requestId) {
                return $http.put(baseUrl + '/me/requests/' + requestId + '?status=approved', null, getConfig());
            },
            rejectFriendRequest: function(requestId) {
                return $http.put(baseUrl + '/me/requests' + requestId + '?status=delete', getConfig());
            },
            getFriendsList: function(username) {
                return $http.get(baseUrl + '/users/' + username + '/friends', getConfig());
            },
            getFriendsPreview: function(username) {
                return $http.get(baseUrl + '/users/' + username + '/friends/preview', getConfig());
            }
        };

        return friendsRepo;
    }]);
