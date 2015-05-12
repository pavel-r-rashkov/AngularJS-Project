angular.module('usersModule')
    .factory('usersService', ['$http', function($http) {
        function getConfig() {
            var config = {};
            if(localStorage['sessionToken']) {
                config.headers = {};
                config.headers.Authorization = 'Bearer ' + localStorage['sessionToken'];
            }

            return config;
        };

        function setUserData(username, sessionToken) {
            localStorage['username'] = username;
            localStorage['sessionToken'] = sessionToken;
        }

        function deleteUserData() {
            delete localStorage['username'];
            delete localStorage['sessionToken'];
        }

        var baseUrl = 'http://softuni-social-network.azurewebsites.net/api/users';

        var usersRepo = {
            login: function(username, password) {
                var params = {
                    username: username,
                    password: password
                };

                return $http.post(baseUrl + '/login', params).then(function(data) {
                    setUserData(data['data']['userName'], data['data']['access_token']);
                });
            },
            logout: function() {
                return $http.post(baseUrl + '/logout', null, getConfig()).then(function() {
                    deleteUserData();
                });
            },
            register: function(username, password, confirmPassword, name, email) {
                var params = {
                    username: username,
                    password: password,
                    confirmPassword: confirmPassword,
                    name: name,
                    email: email
                };
                return $http.post(baseUrl + '/register', params).then(function(data) {
                    setUserData(data['data']['userName'], data['data']['access_token']);
                });
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
            },
            getFriendsList: function(username) {
                return $http.get(baseUrl + '/' + username + '/friends', getConfig());
            },
            getFriendsPreview: function(username) {
                return $http.get(baseUrl + '/' + username + '/friends/preview', getConfig());
            }
        };

        return usersRepo;
    }]);