(function () {
  "use strict";

  angular.module("app").factory("helperFactory", helperFactory);

  helperFactory.$inject = ["$rootScope", "$location"];

  function helperFactory($location) {
    return {
      sendError: sendError,
      go: go,
    };

    function sendError(_error) {
      return { error: true, msg: _error.data.message };
    }

    function go(_path) {
      var path = _path ? _path : $location.path();
      if (path === "/pets" || path === "/register") {
        $location.path(path);
      }
    }
  }
})();
