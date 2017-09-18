;(function () {
    'use strict';

    angular.module('app')
        .controller('HomepageController', HomepageController);


    HomepageController.$inject = ['data'];

    function HomepageController(data) {
        let vm = this;

        vm.weather = data;
    }
})();