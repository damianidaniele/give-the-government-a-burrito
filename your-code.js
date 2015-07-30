angular.module('jsCodingTest', [
    // Add module dependencies here.
    'cpLib'
]);

angular.module('jsCodingTest').controller('GiveTheGovernmentABurrito', function( $scope, PackagesFactory ) {
    // Your JavaScript goes here.
    // Your code should use our JS library's `PackagesFactory.searchPackages` method to search
    // for burritos that can be delivered to the Houses of Parliament in London.
    // The API URL that should be called is:
    // https://api.citypantry.com/packages/search?name=Burrito&postcode=SW1A%200AA
    var typeOfFood = 'Burrito',
    	postCode = 'SW1A%200AA';

    PackagesFactory
		.searchPackages( typeOfFood, postCode )
    	.success( function ( data ) {

    		if( data.packages ) {
    			$scope.packages = data.packages;
    		}
    	})
    	.error( function ( err ) {

    		console.err( 'error: ', err ); 
    		if ( err.error ) {
    			$scope.error = err.errorTranslation;
    		}
    	});
});
