describe('customersCtrl', function() {
      beforeEach(module('app.customers'));

      var $componentController;

      var mockedCustomersService = {
        customersList: [{
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
        }, {
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
        }]
      };

      beforeEach(inject(function(_$componentController_) {
        $componentController = _$componentController_;
      }));

      describe('$scope.grade', function() {
          var ctrl;

          beforeEach(function() {
              ctrl = $componentController('customersList', {
                  $state: {},
                  customersService: mockedCustomersService,
                  $rootScope: {},
                  {});
              });

            it('should select one customer via rootScope', function() {
              var index = 1;
              var expectedObject = {
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
              };


              ctrl.selectCustomer(index);
              expect(ctrl.selectedCustomer).toEqual(expectedObject);
              expect(mockedCustomersService.customersList[1]).toEqual(expectedObject);
            });

          });
      });