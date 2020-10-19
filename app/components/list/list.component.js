(function () {
  "use strict";

  angular.module("app").component("list", {
    templateUrl: "components/list/list.tpl.html",
    controller: "ListController",
    controllerAs: "vm",
    bindings: {
      controller: "=",
    },
  });
})();
