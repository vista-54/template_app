;(function () {
    'use strict';

    angular.module('app')
        .controller('HomepageController', HomepageController);

    function HomepageController() {
        let vm = this;
        vm.openPreRegModal = openPreRegModal;

        function openPreRegModal() {

        }

    }
})();