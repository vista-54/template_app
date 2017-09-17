;(function () {
    'use strict';
    angular
        .module('factory.url', [])
        .factory('url', url);


    url.$inject = [];

    function url() {
        let baseUrl = 'http://api.openweathermap.org/data/2.5/';
        return {
            weather: baseUrl + 'weather'
        };
    }

})();