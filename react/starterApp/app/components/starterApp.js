import React from 'react';
import Elementlist from './elementList';
import Detailpanel from './detailPanel';

export default class StarterApp extends React.Component {
	constructor( props ) {
		super( props );

		this.state = {
				elements: this.getElements(),
				selectedElement : this.getElementDetail(0)
		};

	}



	render() {


		return (
			<div>
				<div>
					<div>
						<Elementlist elements={this.state.elements} onElementSelect={this.selectElement}></Elementlist>
          </div>
					<div>
					  <Detailpanel selectedElement={this.state.selectedElement}></Detailpanel>
					</div>
				</div>
			</div>
		);
	}

	selectElement(element){
		this.setState({
			elements: this.state.elements,
			selectedElement: element
		})
	}

	getElements() {
			var elements = [];
			for ( var i = 0; i < 10; i++ ) {
					elements.push( this.getElementDetail( i ) );
			}
			return elements;
	}

	getElementDetail( index ) {
			var result = null;
			if ( index % 5 == 0 ) {
					result = {
							id: index,
							shortDescription: 'shortDescription' + index,
							info1: 'info1 - ' + index,
							info2: 'info2 - ' + index,
							longDescription: 'longDescription longDescription longDescription longDescription longDescription ' + index,
							type: 'weird',
							weirdDescription: 'gooble gobble one of us a loving cup'
					}
			} else {
					result = {
							id: index,
							shortDescription: 'shortDescription' + index,
							info1: 'info1 - ' + index,
							info2: 'info2 - ' + index,
							longDescription: 'longDescription longDescription longDescription longDescription longDescription ' + index,
							type: 'normal',
							weirdDescription: null
					}
			}
			return result;
	}
}
