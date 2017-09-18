;(function () {

    'use strict';

    angular.module('service.weather', [])
        .service('weather', weather);


    weather.$inject = ['http', 'url'];

    function weather(http, url) {


        return {
            get: get
        };

        /**
         * Function for gettinf weather
         * @param {object} data
         * @param {string} data.q - '{city name},{country code}'
         * @returns {*}
         */
        function get(data) {
            return http.get(url.weather, data)
                .then(function (res) {
                    return res;
                })
        }
    }
})();