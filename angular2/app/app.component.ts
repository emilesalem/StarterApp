import {Component} from 'angular2/core';
import {DataService} from './data.service';
import {ElementList} from './element-list.component'
import {DetailPanel} from './detail.component'

@Component( {
    selector: 'my-app', //
    template: `
        <div class="panel">
            <div class="row">
              <div class="col-md-8">
                  <elementlist #list [elementList]="elements"></elementlist>
              </div>
              <div class="col-md-4">
                  <detailpanel [element]="list.selectedElement()"></detailpanel><!--we can reference elementList component from this template with a '#' prefixed tag ('#list')-->
              </div>
            </div>
        </div>`, //
    providers: [DataService], //
    directives: [ElementList, DetailPanel] //needed or else component templates not recognized
} )

export class AppComponent {

    constructor( private dataService:DataService ) {
    }

    public elements:AppDetail[] = this.dataService.getElements();

}