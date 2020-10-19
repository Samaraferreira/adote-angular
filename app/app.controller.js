(function () {
  "use strict";

  angular.module("app").controller("AppController", appController);

  appController.$inject = ["$http", "constants"];

  function appController($http, constants) {
    var vm = this;

    vm.load = loadPets;
    vm.selectCategory = selectCategory;
    vm.handleWhatsapp = handleWhatsapp;

    function loadPets() {
      return $http
        .get(constants.URL_BASE + "/load-pets")
        .then(function (response) {
          vm.pets = response.data;
        })
        .catch(function () {
          console.log("erro");
        });
    }

    function selectCategory(category) {
      if (vm.pets) {
        vm.petsFilter = vm.pets.filter(function (pet) {
          if (pet.type === category) return pet;
        });
      }
    }

    function handleWhatsapp(phone) {
      var link = "https://api.whatsapp.com/send?phone=" + phone;
      window.open(link, "_black");
    }
  }
})();
