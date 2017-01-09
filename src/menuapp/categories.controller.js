(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);


CategoriesController.$inject = ['MenuDataService', 'categories'];
function CategoriesController(MenuDataService, categories) {
  var catCtrl = this;
  console.log('These are the categories');
  console.log(categories);
  catCtrl.categories = categories;
}

})();
