(function () {
  "use strict";

  angular.module("app").controller("ListController", listController);

  // listController.$inject = ["vm", "listService"];
  listController.$inject = ["$http", "constants", "helperFactory"];

  function listController($http, constants, helper) {
    var vm = this;

    vm.init = init();

    function init() {
      return $http
        .get(constants.URL_BASE + "/load-pets")
        .then(function (response) {
          vm.pets = response.data;
        })
        .catch(() => {
          console.log("erro");
        });
    }
  }
})();
