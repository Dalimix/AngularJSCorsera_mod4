(function(){
  angular.module('MenuApp')
  .service('MenuDataService',MenuDataService);

  MenuDataService.$inject = ['$http'];
  function MenuDataService($http){
    var MDSrv = this;
    var categoriesAPI = 'https://davids-restaurant.herokuapp.com/categories.json';
    var itemAPI = ' https://davids-restaurant.herokuapp.com/menu_items.json?category=';

    MDSrv.getAllCategories = function(){
      return $http({
        method: "GET",
        url: (categoriesAPI),
      }).then(function (result) {
        MDSrv.categories = result.data;
        return MDSrv.categories;
      });
    }
    MDSrv.getItemsForCategory = function(categoryShortName){
      return $http({
        method: "GET",
        url: (itemAPI + categoryShortName),
      }).then(function (result) {
        MDSrv.ItemsInCat = result.data;
        console.log(MDSrv.ItemsInCat);
        return (MDSrv.ItemsInCat);
      });
    }
  }
})();
