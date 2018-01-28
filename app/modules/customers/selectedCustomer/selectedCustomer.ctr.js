(function () {
    'use strict';

    angular.module('app.customers')
        .component('selectedCustomer', {
            templateUrl: '/app/modules/customers/selectedCustomer/selectedCustomer.html',
            bindings: {
                selected: '<',
                way: '@'

            }
        });

})();
