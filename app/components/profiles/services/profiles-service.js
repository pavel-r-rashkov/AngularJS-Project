angular.module('profilesModule')
    .factory('profilesService', ['$http', function($http) {
        function getConfig() {
            var config = {};
            if(localStorage['sessionToken']) {
                config.headers = {};
                config.headers.Authorization = 'Bearer ' + localStorage['sessionToken'];
            }

            return config;
        };

        var baseUrl = 'http://softuni-social-network.azurewebsites.net/api/me';

        var profilesRepo = {
            getMyData: function() {
                return $http.get(baseUrl, getConfig());
            },
            getNewsFeed: function(startPostId, pageSize) {
                return $http.get(baseUrl + '/feed?StartPostId=' + startPostId + '&PageSize=' + pageSize, getConfig());
            },
            changePassword: function(data) {
                return $http.put(baseUrl + '/changepassword', data, getConfig());
            },
            editProfile: function(profileData) {
                return $http.put(baseUrl, profileData, getConfig());
            }
        };

        return profilesRepo;
    }]);
