angular.module('profilesModule')
    .factory('profilesService', ['$http', 'credentialsService', function($http, credentialsService) {
        var baseUrl = 'http://softuni-social-network.azurewebsites.net/api/me';

        var profilesRepo = {
            getMyData: function() {
                return $http.get(baseUrl, credentialsService.getConfig());
            },
            getNewsFeed: function(startPostId, pageSize) {
                return $http.get(baseUrl + '/feed?StartPostId=' + startPostId + '&PageSize=' + pageSize, credentialsService.getConfig());
            },
            changePassword: function(data) {
                return $http.put(baseUrl + '/changepassword', data, credentialsService.getConfig());
            },
            editProfile: function(profileData) {
                return $http.put(baseUrl, profileData, credentialsService.getConfig());
            }
        };

        return profilesRepo;
    }]);
