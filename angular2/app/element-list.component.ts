import {Component, Input} from 'angular2/core';
import {DataService} from './data.service';

@Component( {
    selector: 'elementlist', //
    template: `
           <div class="panel panel-default">
                <div class="panel-heading">
                    <h3>Elements</h3>
                </div>
                <div class="panel-body">
                    <table class="table table-hover">
                        <tr>
                            <th>
                                <h4>ID</h4>
                            </th>
                            <th>
                                <h4>DESCRIPTION</h4>
                            </th>
                        </tr>
                        <!--1.5 version: <tr ng-repeat="element in $ctrl.elementlist" ng-click="$ctrl.select({id:element.id})"> -->
                        <tr *ngFor="#element of elementList" (click)="onSelect(element)">
                           <td width="10%">
                               {{element.id}}
                           </td>
                            <td>
                                {{element.longDescription}}
                            </td>
                        </tr>
                    </table>
                </div>
            </div> `
} )

export class ElementList {

    _elementList:AppDetail[] = null;

    _selectedElement:AppDetail = null;

    @Input()
    set elementList( elementList:AppDetail[] ) {
        this._elementList = elementList;
    }

    get elementList() {
        return this._elementList;
    }

    selectedElement() {
        return this._selectedElement;
    }

    onSelect( element:AppDetail ) {
        this._selectedElement = element;
    }

}