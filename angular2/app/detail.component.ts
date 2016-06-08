import {Component} from 'angular2/core'
import{AppDetail} from './app-detail'
import{AppDetailImpl} from './app-detail-impl'
import{DetailFormComponent} from './detail-form.component'

@Component( {
    selector: 'detailpanel', //
    inputs: ['element'], //comparé à @Input + getter,setter (voir element-list), //
    directives: [DetailFormComponent], //
    template: `
    <div class="panel panel-default">
        <div class="panel-heading">
            <h3>Details</h3>
        </div>
        <div class="panel-body">
            <div class="row">
                <div class="col-md-4">
                    <label class="pull-right">ID:</label>
                </div>
                <div class="col-md-8">
                    {{element.id}}
                </div>
            </div>
            <div class="row">
                <div class="col-md-4">
                    <label class="pull-right">Short Description:</label>
                </div>
                <div class="col-md-8">
                    {{element.shortDescription}}
                </div>
            </div>
            <div class="row">
                <div class="col-md-4">
                    <label class="pull-right">Info 1:</label>
                </div>
                <div class="col-md-8">
                    {{element.info1}}
                </div>
            </div>
            <div class="row">
                <div class="col-md-4">
                    <label class="pull-right">Info 2:</label>
                </div>
                <div class="col-md-8">
                    {{element.info2}}
                </div>
            </div>
            <div class="row">
                <div class="col-md-4">
                    <label class="pull-right">Long Description:</label>
                </div>
                <div class="col-md-8">
                    {{element.longDescription}}
                </div>
            </div>
            <div class="row">
                <div class="col-md-4">
                    <label class="pull-right">Type:</label>
                </div>
                <div class="col-md-8">
                    {{element.type}}
                </div>
            </div>
            <!--<div class="row" ng-if="$ctrl.element.type=='weird'">-->
            <div class="row" *ngIf="element.type=='weird'">
                <div class="col-md-4">
                    <label class="pull-right">Weird Description:</label>
                </div>
                <div class="col-md-8">
                    {{element.weirdDescription}}
                </div>
            </div>
        </div>
        <div class="panel-footer">
           <button class="btn" value="edit" (click)="editDetails()" data-toggle="modal" data-target="#detail-form" >edit</button>
        </div>
    </div>
    <detail-form id="detail-form" *ngIf="showform.show" [(elementToEdit)]="element" [(showform)]="showform" ></detail-form>
    `
} )

export class DetailPanel {

    element:AppDetail;

    copyElement:AppDetail;

    public showform = {show: false};

    constructor() { // exception thrown on null element properties, ngOnInit needed???
        /* this.element = {
         id: null, shortDescription: "", info1: "", info2: "", longDescription: "", type: "", weirdDescription: ""
         };*/
    }

    ngOnInit() {
        this.element = new AppDetailImpl( null, "", "", "", "", "", "" );
    }

    /**
     * open a modal to let the user edit the selected element details
     */
    editDetails() {
        this.showform.show = true;
    }

}