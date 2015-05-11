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

        var baseUrl = 'http://softuni-social-network.azurewebsites.net/api/me';

        var friendsRepo = {
            getFriends: function() {
                return $http.get(baseUrl + '/friends', getConfig());
            },
            getFriendRequests: function() {
                return $http.get(baseUrl + '/requests', getConfig());
            },
            sendFriendRequest: function(username) {
                return $http.post(baseUrl + '/requests/' + username, null, getConfig());
            },
            approveFriendRequest: function(requestId) {
                return $http.put(baseUrl + '/requests/' + requestId + '?status=approved', getConfig());
            },
            rejectFriendRequest: function(requestId) {
                return $http.put(baseUrl + '/requests' + requestId + '?status=delete', getConfig());
            }
        };

        return friendsRepo;
    }]);
