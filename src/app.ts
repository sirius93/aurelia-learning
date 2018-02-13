import * as firebase from 'firebase';
import { DataApi } from './services/api';
import { inject } from 'aurelia-framework';
declare const window: any;
const f = window.firebase;

@inject(DataApi)
export class App {
  message = 'Hello World!'; 

  constructor(public api:DataApi){ 
    this.api = api;
    this.fetchDatafun();
  }
  fetchDatafun(){
    this.api.fetchData();
  }
}


