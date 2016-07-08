import React from 'react';

export default  ({
	elements,
	onSelectElement
}) =>

			<div >
					 <div >
							 <h3>Elements</h3>
					 </div>
					 <div >
							 <table >
									 <tr>
											 <th>
													 <h4>ID</h4>
											 </th>
											 <th>
													 <h4>DESCRIPTION</h4>
											 </th>
									 </tr>
									 {elements.map((element) =>
												<tr>
		 											<td width="10%">
		 													{element.id}
		 											</td>
		 											 <td>
		 													 {element.longDescription}
		 											 </td>
		 									 </tr>)}
							 </table>
					 </div>
			 </div>
