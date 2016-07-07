import React from 'react';
import Elementlist from './elementList';
import Detailpanel from './detailPanel';

export default class StarterApp extends React.Component {
	constructor( props ) {
		super( props );
	}

	render() {
		return (
			<div>
				<div>
					<div>
						<Elementlist></Elementlist>
          </div>
					<div>
					  <Detailpanel></Detailpanel>
					</div>
				</div>
			</div>
		);
	}
}
