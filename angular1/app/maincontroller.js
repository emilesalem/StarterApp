angular.module( 'prototype' ).controller( 'maincontroller', [
	'dataservice',
	mainController
] );

function mainController( dataservice ) {

	var mc = this;

	mc.elementList = dataservice.getElements();

	mc.selectedElement = null;

	mc.selectElement = function ( index ) {
		mc.selectedElement = mc.elementList[index];
	}


}