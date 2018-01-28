(function () {
    'use strict';

    angular
        .module('app.customers', [])
        .config(configure);

    configure.$inject = ['$stateProvider'];

    function configure($stateProvider) {
        $stateProvider
            .state('parent', {
                abstract: true,
                url: '/',
                template: '<parent-customers-list></parent-customers-list>'

            })
            .state('parent.customers', {
                url: 'customers',
                template: '<customers-list selected=$ctrl.selected></customers-list>'
            })
    }

})();