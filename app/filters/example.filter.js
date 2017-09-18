;(function () {

    'use strict';

    angular.module('filter.example', [])
        .filter('example', example);


    example.$inject = [];

    function example() {

        // In the return function, we must pass in a single parameter which will be the data we will work on.
        // We have the ability to support multiple other parameters that can be passed into the filter optionally
        return function(input, optional1, optional2) {

            let output;

            // Do filter work here
            output = input;

            return output;

        }

    }
})();