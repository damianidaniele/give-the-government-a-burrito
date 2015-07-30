'use strict';

describe('Controller: GiveTheGovernmentABurrito', function () {
  var scope,
      httpBackend,
      createController,
      PackagesFactory;

  beforeEach(module('jsCodingTest'));

  beforeEach(inject(function ( $controller, $rootScope, $httpBackend, _PackagesFactory_ ) {
  
    httpBackend = $httpBackend;    
    scope = $rootScope.$new();
    PackagesFactory = _PackagesFactory_;

    createController = function() {
      return $controller( 'GiveTheGovernmentABurrito', { 
        $scope: scope, 
        PackagesFactory: PackagesFactory
      });
    };
  }));

  afterEach(function() {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
  });

  it('should check the scope is populated with data from the service', function () {
    var mockData = { packages: [{ name: "BigMac", images: [{ medium: "http://randompic" }] }, { name: "Pizza", images: [{ medium: "http://randompic2" }] }] },
        url = 'https://api.citypantry.com/packages/search?name=Burrito&postcode=SW1A%200AA&maxBudget=&headCount=&time=&date=&packagingType=';
    
    httpBackend.expect('GET', url ).respond( 200, mockData );
    createController();
    httpBackend.flush();
    expect( scope.packages ).toBeDefined();
    expect( scope.packages.length ).toBe( 2 );
    expect( scope.packages[0].name ).toEqual( 'BigMac' );
    expect( scope.packages[0].images[0].medium ).toEqual( 'http://randompic' );
    expect( scope.packages[1].name ).toEqual( 'Pizza' );
    expect( scope.packages[1].images[0].medium ).toEqual( 'http://randompic2' );
  });

});