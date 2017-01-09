(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);


ItemsController.$inject = ['MenuDataService', 'items'];
function ItemsController(MenuDataService, items) {
  var itmCtrl = this;
  itmCtrl.items = items.menu_items;
  itmCtrl.category = items.category.name;
}

})();
