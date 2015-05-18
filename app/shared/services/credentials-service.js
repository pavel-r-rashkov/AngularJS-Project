angular.module('myApp')
    .factory('credentialsService', function() {
        function getConfig() {
            var config = {};
            config.headers = {};
            if(localStorage['sessionToken']) {
                config.headers.Authorization = 'Bearer ' + localStorage['sessionToken'];
            }

            return config;
        }

        function getCurrentUser() {
            return {
                username: localStorage['username'],
                name: localStorage['name'],
                profileImageData: localStorage['profileImageData']
            }
        }

        function deleteUserData() {
            delete localStorage['username'];
            delete localStorage['sessionToken'];
            delete localStorage['name'];
            delete localStorage['profileImageData'];
            delete localStorage['sessionToken'];
        }

        function setCurrentUser(name, profileImageData, username) {
            if(username) {
                localStorage['username'] = username;
            }
            localStorage['name'] = name;
            localStorage['profileImageData'] = profileImageData;
        }

        function setAccessToken(token) {
            localStorage['sessionToken'] = token;
        }

        function isLogged() {
            return !!localStorage['sessionToken'];
        }

        return {
            getConfig: getConfig,
            getCurrentUser: getCurrentUser,
            setCurrentUser: setCurrentUser,
            setAccessToken: setAccessToken,
            deleteCurrentUserData: deleteUserData,
            isLogged: isLogged
        }
    });
