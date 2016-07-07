angular.module( 'prototype' ).controller( 'editionModalController', editionModalController ).directive( 'requiredIfFieldNotEmpty', validateInfos );

function editionModalController( $scope, $uibModalInstance, elementToEdit ) {

	$scope.elementToEdit = elementToEdit;

	$scope.save = function () {
		if ( $scope.form.$valid ) {
			$uibModalInstance.close( $scope.elementToEdit );
		} else {
		}
	}

	$scope.cancel = function () {
		$uibModalInstance.dismiss( 'cancel' );
	}
}

function validateInfos() {
	return {
		require: 'ngModel',
		link: function ( $scope, $element, $attrs, ctrl ) {
			ctrl.$validators.requiredConditional = function ( viewValue ) {
				return viewValue || !$attrs.requiredIfFieldNotEmpty;
			};

		}
	}
}