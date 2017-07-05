;(function () {
    angular.module('app',
        [
            'app.core',
            'app.directives',
            // 'app.request',
            // 'app.services',
            // 'app.filters',

        ])
        .run(runBlock);

    // runBlock.$inject = ['$sessionStorage','$localStorage',];

    function runBlock() {
    }
})();
