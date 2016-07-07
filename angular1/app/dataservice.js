angular.module( 'prototype' ).factory( 'dataservice', [dataService] );

function dataService() {

	function getElements() {
		var elements = [];
		for ( var i = 0; i < 10; i++ ) {
			elements.push( getElementDetail( i ) );
		}
		return elements;
	}

	function getElementDetail( index ) {
		var result = null;
		if ( index % 5 == 0 ) {
			result = {
				id: index,
				shortDescription: 'shortDescription' + index,
				info1: 'info1 - ' + index,
				info2: 'info2 - ' + index,
				longDescription: 'longDescription longDescription longDescription longDescription longDescription ' + index,
				type: "weird",
				weirdDescription: 'gooble gobble one of us a loving cup'
			}
		} else {
			result = {
				id: index,
				shortDescription: 'shortDescription' + index,
				info1: 'info1 - ' + index,
				info2: 'info2 - ' + index,
				longDescription: 'longDescription longDescription longDescription longDescription longDescription ' + index,
				type: "normal",
				weirdDescription: null
			}
		}
		return result;
	}

	return {
		getElements: getElements
	};
}