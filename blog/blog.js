angular.module('blog', ['ui.bootstrap', 'ui.utils', 'ui.router', 'ngAnimate']);

angular.module('blog').config(function($stateProvider) {
  $stateProvider.state('blog.article', {
    url: '/:article',
    templateUrl: function ($stateParams) {
      return 'blog/articles/' + $stateParams.article + '.html';
    }
  });
  /* Add New States Above */

});

