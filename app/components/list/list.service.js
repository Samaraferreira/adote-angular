(function () {
  "use strict";

  angular.module("app").service("listService", listService);

  listService.$inject = ["$http", "constants", "helperFactory"];

  function listService($http, constants, helper) {
    return {
      loadPets: loadPets,
      // addPet: addPet,
    };

    function loadPets(_category) {
      return $http
        .get(constants.URL_BASE + `/pets?type=${_category}`)
        .then(function (response) {
          return response.data;
        })
        .catch(helper.sendError);
    }

    // function addPet(_params) {
    //   return $http
    //     .post(constants.URL_BASE + "/pets", _params)
    //     .then(function (response) {
    //       return response.data;
    //     })
    //     .catch(helper.sendError);
    // }
  }
})();
