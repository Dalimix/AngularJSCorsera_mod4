(function(){
  angular.module('Data')
  .component('categoriesComponent', {
    templateUrl: 'src/data/templates/categories.template.html',
    bindings:{
      categories: '<'
    }
  });

})();
