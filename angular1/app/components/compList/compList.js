angular.module( 'prototype' ).component( 'complist', {

	templateUrl: 'components/complist/complist.html',
	bindings: {
		elementlist: '<',
		select: '&'
	}
} );
