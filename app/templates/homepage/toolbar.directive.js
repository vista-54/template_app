;(function () {
    angular.module('directive.toolbar', [])
        .directive('toolbar', function () {
            return {
                restrict: 'AE',
                templateUrl:'templates/homepage/toolbar.html',
                link: function (scope, elem, attrs) {
                }
            };
        });
})();