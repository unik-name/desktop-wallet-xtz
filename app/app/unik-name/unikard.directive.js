;(function () {
  'use strict'

  /*
   * Display unikard
   */
  angular.module('popup').directive('unikard', function () {
    return {
      restrict: 'E',
      replace: true,
      scope: {
        unikname: '=unikname'
      },
      templateUrl: 'app/unik-name/unikard.directive.html',
      link: function (scope, _, attrs) {
        scope.unikRange = function(min, max, step) {
            step = step || 1;
            var input = [];
            for (var i = min; i <= max; i += step) {
                input.push(i);
            }
            return input;
          };
          scope.slowAnimation = attrs.slow;
      }
    };
  });
})()
