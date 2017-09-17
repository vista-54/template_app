;(function () {
    'use strict';
    angular
        .module('factory.url', [])
        .factory('url', url);


    url.$inject = [];

    function url() {
        let baseUrl = 'http://www.metoffice.gov.uk/pub/data/weather/uk/climate/stationdata/bradforddata.txt';
        return {
            firsturl: baseUrl
        };
    }

})();