(function() {
  'use strict';

  angular.module('app.customers')
    .component('customersList', {
      templateUrl: '/modules/customers/customers/customers.html',
      controller: customersCtrl,
      bindings: {
        selected: '='
      }
    });


  function customersCtrl($state, customersService, $rootScope) {
    var ctrl = this;
    ctrl.customersService = customersService;

    ctrl.selectCustomer = function(index) {
      ctrl.selectedCustomer = customersService.customersList[index];
      customersService.selectedCustomer = customersService.customersList[index];
    };



  }
  customersCtrl.$inject = ['$state', 'customersService', '$rootScope'];

})();