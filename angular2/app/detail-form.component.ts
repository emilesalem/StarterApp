import { Component} from 'angular2/core';
import {FORM_DIRECTIVES, FormBuilder, Control, ControlGroup, Validators} from 'angular2/common';
import { AppDetail } from './app-detail';

@Component( {
    selector: 'detail-form', //
    templateUrl: 'app/detail-form.component.html', //
    inputs: ['elementToEdit', 'showform'],//
    directives: [FORM_DIRECTIVES] //includes a bunch of useful directives such as ngControl, ngControlGroup, ngForm (which gets automatically attached to form tags), ngModel, etc...
} )

export class DetailFormComponent {

    detailForm:ControlGroup;

    formBuilder:FormBuilder;

    constructor( formBuilder:FormBuilder ) {
        this.formBuilder = formBuilder;
    }

    //required-if-field-not-empty
    function

    customValidator1( fieldWatched:string, dependantField:string ):{[s: string]:boolean} {
        return ( group:ControlGroup ):{[key: string]: boolean} => {
            let field1 = group.controls[fieldWatched];
            let field2 = group.controls[dependantField];

            if ( field1 && !field2 ) {
                return {
                    fieldNotEmptyProblem: true
                };
            }
        }
    }

    ngOnInit() {
        this.detailForm = <ControlGroup>this.formBuilder.group( {
            id: [this.elementToEdit.id, Validators.required], //
            shortDescription: [this.elementToEdit.shortDescription, Validators.required],//
            info1: [this.elementToEdit.info1, Validators.required],//
            info2: [this.elementToEdit.info2, Validators.required], //
            longDescription: [this.elementToEdit.longDescription, Validators.required],//
            type: [this.elementToEdit.type, Validators.required],//
            weirdDescription: [this.elementToEdit.weirdDescription, Validators.required]
        }, {validator: this.customValidator1( 'info1', 'info2' )} );
    }

    public elementToEdit:AppDetail;

    public showform;

    submitted = false;

    commit() {
        this.submitted = true;
        this.showform.show = false;
    }

    cancel() {
        this.showform.show = false;
    }

    save() {
        this.elementToEdit.id = this.detailForm.controls['id'].value;
        this.elementToEdit.shortDescription = this.detailForm.controls['shortDescription'].value;
        this.elementToEdit.info1 = this.detailForm.controls['info1'].value;
        this.elementToEdit.info2 = this.detailForm.controls['info2'].value;
        this.elementToEdit.longDescription = this.detailForm.controls['longDescription'].value;
        this.elementToEdit.weirdDescription = this.detailForm.controls['weirdDescription'].value;
        this.showform.show = false;
    }
}