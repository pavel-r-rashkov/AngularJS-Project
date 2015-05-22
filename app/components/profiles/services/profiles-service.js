angular.module('profilesModule')
    .factory('profilesService', function($http, credentialsService, profilesServiceBaseUrl) {
        var baseUrl = profilesServiceBaseUrl.baseUrl;

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
    });
