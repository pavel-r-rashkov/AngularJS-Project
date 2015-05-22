angular.module('myApp')
    .factory('credentialsService', function() {
        function getConfig() {
            var config = {};
            config.headers = {};
            if(sessionStorage['sessionToken']) {
                config.headers.Authorization = 'Bearer ' + sessionStorage['sessionToken'];
            }

            return config;
        }

        function getCurrentUser() {
            return {
                username: sessionStorage['username'],
                name: sessionStorage['name'],
                profileImageData: sessionStorage['profileImageData']
            }
        }

        function deleteUserData() {
            delete sessionStorage['username'];
            delete sessionStorage['sessionToken'];
            delete sessionStorage['name'];
            delete sessionStorage['profileImageData'];
            delete sessionStorage['sessionToken'];
        }

        function setCurrentUser(name, profileImageData, username) {
            if(username) {
                sessionStorage['username'] = username;
            }
            sessionStorage['name'] = name;
            sessionStorage['profileImageData'] = profileImageData;
        }

        function setAccessToken(token) {
            sessionStorage['sessionToken'] = token;
        }

        function isLogged() {
            return !!sessionStorage['sessionToken'];
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
