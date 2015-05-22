angular.module('usersModule')
    .factory('usersService', function($http, credentialsService, usersServiceBaseUrl) {
        var baseUrl = usersServiceBaseUrl.baseUrl;

        var usersRepo = {
            login: function(username, password) {
                var params = {
                    username: username,
                    password: password
                };

                return $http.post(baseUrl + '/login', params);
            },
            logout: function() {
                return $http.post(baseUrl + '/logout', null, credentialsService.getConfig());
            },
            register: function(username, password, confirmPassword, name, email) {
                var params = {
                    username: username,
                    password: password,
                    confirmPassword: confirmPassword,
                    name: name,
                    email: email
                };
                return $http.post(baseUrl + '/register', params);
            },
            getUserData: function(username) {
                return $http.get(baseUrl + '/' + username, credentialsService.getConfig());
            },
            getUserPreviewData: function(username) {
                return $http.get(baseUrl + '/' + username + '/preview', credentialsService.getConfig());
            },
            searchUsersByName: function(searchTerm) {
                return $http.get(baseUrl + '/search?searchTerm=' + searchTerm, credentialsService.getConfig());
            },
            getWall: function(username, startPostId, pageSize) {
                return $http.get(baseUrl + '/' + username + '/wall?StartPostId=' + startPostId + '&PageSize=' + pageSize,
                    credentialsService.getConfig());
            }
        };

        return usersRepo;
    });