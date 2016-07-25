import React from 'react';

/*
	*FUNCTION BASED DEFINITION*
	doesnt support the concept of state : no backing instance.
*/

export default({
	selectedElement
}) =>
			<div className="panel panel-default">
			    <div className="panel-heading">
			        <h3>Details</h3>
			    </div>
			    <div className="panel-body">
						<div className="row">
							<div className="col-md-4">
			                <label className="pull-right">ID:</label>
			            </div>
			            <div className="col-md-8">
										{selectedElement.id}
			            </div>
			        </div>
			        <div className="row">
			            <div className="col-md-4">
			                <label className="pull-right">Short Description:</label>
			            </div>
			            <div className="col-md-8">
											{selectedElement.shortDescription}
			            </div>
			        </div>
			        <div className="row">
			            <div className="col-md-4">
			                <label className="pull-right">Info 1:</label>
			            </div>
			            <div className="col-md-8">
											{selectedElement.info1}
			            </div>
			        </div>
							<div className="row">
			            <div className="col-md-4">
			                <label className="pull-right">Info 2:</label>
			            </div>
			            <div className="col-md-8">
											{selectedElement.info2}
			            </div>
			        </div>
							<div className="row">
			            <div className="col-md-4">
			                <label className="pull-right">Long Description:</label>
			            </div>
			            <div className="col-md-8">
											{selectedElement.longDescription}
			            </div>
			        </div>
							<div className="row">
			            <div className="col-md-4">
			                <label className="pull-right">Type:</label>
			            </div>
			          <div className="col-md-8">
											{selectedElement.type}
			            </div>
			        </div>
			        {/*<div> // ng-if="$ctrl.element.type=='weird'">*/}
							<div className="row">
			            <div className="col-md-4">
			                <label className="pull-right">Weird Description:</label>
			            </div>
			            <div className="col-md-8">
											{selectedElement.weirdDescription}
			            </div>
			        </div>
			    </div>
			    <div>
			        {/*<button  value="edit" ng-click="$ctrl.copy()">edit</button>*/}
							<button value="edit" className="pull-right"></button>
			    </div>

			</div>
