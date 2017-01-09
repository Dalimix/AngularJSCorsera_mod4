(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menuapp/templates/home.template.html'
  })

  // Premade list page
  .state('categoriesList', {
    url: '/categories-list',
    templateUrl: 'src/menuapp/templates/categories-list.template.html',
    controller: 'CategoriesController as catCtrl',
    resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  .state('itemsList', {
    url: '/items-list/{categorieID}',
    templateUrl: 'src/menuapp/templates/items-list.template.html',
    controller: "ItemsController as itmCtrl",
    resolve: {
      items: ['MenuDataService', '$stateParams', function (MenuDataService, $stateParams) {
        console.log($stateParams.categorieID);
        return MenuDataService.getItemsForCategory($stateParams.categorieID);
      }]
    }
  });

}

})();
