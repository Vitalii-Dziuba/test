(function() {
  'use strict';

  angular.module('app.customers')
    .factory('customersService', customersService);

  function customersService($rootScope) {
    var vm = {};
    
    vm.customersList = [
      {
        id: '1',
        firstName: 'Jane',
        lastName: 'Pinkman',
        phoneNumber: '0680291431',
        role: 'Designer',
        location: 'New York',
        twitter: 'gijane',
        facebook: 'gijane',
        instagram: 'gijane',
        linkedin: 'gijane'
      },
      {
        id: '2',
        firstName: 'Bob',
        lastName: 'Marley',
        phoneNumber: '0680291221',
        role: 'Developer',
        location: 'New York',
        twitter: 'billybob',
        facebook: 'billybob',
        instagram: 'billybob',
        linkedin: 'billybob'
      },
      {
        id: '3',
        firstName: 'Jim',
        lastName: 'Londin',
        phoneNumber: '0680211221',
        role: 'Developer',
        location: 'Chicago',
        twitter: 'jimbo',
        facebook: 'jimbo',
        instagram: 'jimbo',
        linkedin: 'jimbo'
      },
      {
        id: '4',
        firstName: 'Bill',
        lastName: 'Smith',
        phoneNumber: '062211221',
        role: 'Designer',
        location: 'LA',
        twitter: 'dabill',
        facebook: 'dabill',
        instagram: 'dabill',
        linkedin: 'dabill'
      }
    ];

    $rootScope.customersList = vm.customersList;

    return vm;
  }

  customersService.$inject = ['$rootScope'];

})();
