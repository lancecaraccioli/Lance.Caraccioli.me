angular.module('lance.caraccioli.me', ['ui.bootstrap', 'ui.utils', 'ui.router', 'ngAnimate', 'blog']);

angular.module('lance.caraccioli.me').config(function($stateProvider, $urlRouterProvider) {

  $stateProvider.state('home', {
    url: '/home'
  });
  $stateProvider.state('blog', {
    url: '/blog',
    template: '<ui-view></ui-view>'
  });
  /* Add New States Above */
  $urlRouterProvider.otherwise('/home');

});

angular.module('lance.caraccioli.me').run(function($rootScope) {
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
