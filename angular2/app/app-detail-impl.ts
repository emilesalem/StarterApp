export class AppDetailImpl implements AppDetail {

    constructor( //
        public id:number, //
        public shortDescription:string,//
        public info1:string,//
        public  info2:string,//
        public longDescription:string,//
        public type:string,//
        public weirdDescription?:string //'?' describes optional field
    ) {
    }

}