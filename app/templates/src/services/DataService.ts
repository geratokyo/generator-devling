import {Translation} from '../models/models';
import {FIREBASE_CONF} from '../config';

declare var jQuery;
declare var firebase;

export class DataService{
    app:any;
    database:any; 
    translations:Translation;
    locale:string;
    def:any;

    data:any;
    isDataLoaded:boolean;

    constructor(){
        let w: any = window;
        this.locale = w.__LOCALE__; 
        this.def = jQuery.Deferred();

        var config : any = FIREBASE_CONF;
        this.app = firebase.initializeApp(config);
        this.database = this.app.database();
        this.isDataLoaded = false;
    }


    load(){
        this.database.ref("/"+this.locale).on("value",
            (e: any)=>{
                this.data = e.val() as any;

                this.isDataLoaded = true;
                this.def.resolve(this.data); 
            }
        )
        return this.def.promise();
    }

    getByKey = (key:string)=>{
        return this.data[key];
    }

    getNavBar = ()=>{
        return this.data.navBar; 
    }

    getLocale= ()=>{
        return this.data.locale; 
    }
    
    getData(){
        return this.data;
    }

}