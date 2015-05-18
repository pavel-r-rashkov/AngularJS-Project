angular.module('usersModule')
    .factory('usersService', ['$http', function($http) {
        function getConfig() {
            var config = {};
            if(localStorage['sessionToken']) {
                config.headers = {};
                config.headers.Authorization = 'Bearer ' + localStorage['sessionToken'];
            }

            return config;
        }

        var baseUrl = 'http://softuni-social-network.azurewebsites.net/api/users';

        var usersRepo = {
            login: function(username, password) {
                var params = {
                    username: username,
                    password: password
                };

                return $http.post(baseUrl + '/login', params);
            },
            logout: function() {
                return $http.post(baseUrl + '/logout', null, getConfig());
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
                return $http.get(baseUrl + '/' + username, getConfig());
            },
            getUserPreviewData: function(username) {
                return $http.get(baseUrl + '/' + username + '/preview', getConfig());
            },
            searchUsersByName: function(searchTerm) {
                return $http.get(baseUrl + '/search?searchTerm=' + searchTerm, getConfig());
            },
            getWall: function(username, startPostId, pageSize) {
                return $http.get(baseUrl + '/' + username + '/wall?StartPostId=' + startPostId + '&PageSize=' + pageSize, getConfig());
            }
        };

        return usersRepo;
    }]);