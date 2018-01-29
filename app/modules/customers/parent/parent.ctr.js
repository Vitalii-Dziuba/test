(function () {
    'use strict';

    angular.module('app.customers')
        .component('parentCustomersList', {
            templateUrl: '/modules/customers/parent/parent.html',
            controller: parentCtrl
        });


    function parentCtrl($state, $rootScope, customersService) {
        var ctrl = this;
        ctrl.customersService = customersService;
        ctrl.$rootScope = $rootScope;

    }
    
    parentCtrl.$inject = ['$state', '$rootScope', 'customersService'];

})();
