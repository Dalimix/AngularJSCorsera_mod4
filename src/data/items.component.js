(function(){
  angular.module('Data')
  .component('itemsComponents', {
    templateUrl: 'src/data/templates/items.template.html',
    bindings:{
      itemsInCateg: '<'
    }
  });
})();
