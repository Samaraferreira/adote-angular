(function () {
  "use strict";

  angular
    .module("app")
    .controller("CategoriesController", categoriesController);

  // categoriesController.$inject = ["vm", "appService"];
  categoriesController.$inject = ["$rootScope"];

  function categoriesController($rootScope) {
    var vm = this;

    vm.selectCategory = selectCategory;

    function selectCategory(category = "dog") {
      $rootScope.category = category;
    }
  }
})();
