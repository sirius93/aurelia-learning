import * as firebase from 'firebase';
import { config } from '../config';
import { error } from 'util';
declare const window: any;
const f = window.firebase;

f.initializeApp(config.firebase);

export class DataApi {
  private readonly db;

  constructor(){ 
    this.db = f.database().ref("siteData");
  }
  fetchData(){
    this.fetch().
    then(function(data){
        console.log(data);
    })
  }
  fetch(){
    return this.db.once('value')
    .then(function(snapshot) {
        return snapshot.val();
    }
  );
}
}
