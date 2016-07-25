import React from 'react';

/*
	*FUNCTION BASED DEFINITION*
	doesnt support the concept of state : no backing instance.
*/

export default  ({
	elements,
	onElementSelect
}) =>

			<div className="panel panel-default">
					 <div className="panel-heading">
							 <h3>Elements</h3>
					 </div>
					 <div className="panel-body">
							 <table className="table table-hover">
									 <tr>
											 <th>
													 <h4>ID</h4>
											 </th>
											 <th>
													 <h4>DESCRIPTION</h4>
											 </th>
									 </tr>
									 {
										 elements.map((element) =>
												<tr onClick={() => onElementSelect(element)}>
		 											<td width="10%">
		 													{element.id}
		 											</td>
		 											 <td>
		 													 {element.longDescription}
		 											 </td>
		 									 </tr>)
										 }
							 </table>
					 </div>
			 </div>
