angular.module('lancecaraccioli.github.io', ['ui.bootstrap', 'ui.utils', 'ui.router', 'ngAnimate', 'content']);

angular.module('lancecaraccioli.github.io').config(function($stateProvider, $urlRouterProvider) {

    /* Add New States Above */
    $urlRouterProvider.otherwise('/home');

});

angular.module('lancecaraccioli.github.io').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
