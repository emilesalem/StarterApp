angular.module( 'prototype' ).component( 'detailpanel', {
	templateUrl: 'components/detailpanel/detailpanel.html',
	bindings: {
		element: '<'
	},
	controller: [
		'$uibModal',
		detailPanelController
	]
} );

function detailPanelController( $uibModal ) {
	var ctrl = this;

	/*
	 * on copie l'élément pour l'édition car ne veut pas travailler directement dessus puisque tout changement sur ses attributs serait réflété immédiatement dans le scope parent.
	 */

	ctrl.modal = null;

	ctrl.copy = function () {

		if ( ctrl.element ) {
			ctrl.copyElement = {};
			ctrl.copyElement.id = ctrl.element.id;
			ctrl.copyElement.shortDescription = ctrl.element.shortDescription;
			ctrl.copyElement.info1 = ctrl.element.info1;
			ctrl.copyElement.info2 = ctrl.element.info2;
			ctrl.copyElement.longDescription = ctrl.element.longDescription;
			ctrl.copyElement.type = ctrl.element.type;
			ctrl.copyElement.weirdDescription = ctrl.element.weirdDescription;

			ctrl.modal = $uibModal.open( {
				templateUrl: 'components/editionmodal/editionmodal.html',
				resolve: {
					elementToEdit: function () {
						return ctrl.copyElement;
					}
				},
				controller: 'editionModalController'
				//controllerAs fonctionne pas? à vérifier.
			} );

			ctrl.modal.result.then( function ( element ) {
				ctrl.element.id = element.id;
				ctrl.element.shortDescription = element.shortDescription;
				ctrl.element.info1 = element.info1;
				ctrl.element.info2 = element.info2;
				ctrl.element.longDescription = element.longDescription;
				ctrl.element.type = element.type;
				ctrl.element.weirdDescription = element.weirdDescription;
			}, function () {
			} );
		}
	}
}

