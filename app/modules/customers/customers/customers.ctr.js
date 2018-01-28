(function () {
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
            ctrl.selected = customersService.customersList[index];
            customersService.selected = customersService.customersList[index];
            $rootScope.selected = $rootScope.customersList[index];
        };



    }
    customersCtrl.$inject = ['$state', 'customersService', '$rootScope'];

})();
