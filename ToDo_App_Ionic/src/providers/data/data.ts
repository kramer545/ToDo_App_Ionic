import { Injectable } from '@angular/core';
import { Storage } from '@ionic/Storage'; //used to store data
import {IonicStorageModule} from '@ionic/Storage';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpModule } from '@angular/http';
import {Observable} from 'rxjs/Observable';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  constructor(public http: Http, public storage: Storage) {
    console.log('Hello DataProvider Provider');
  }
  
  /*
  getData(username) //retrieve data from storage
  {
	  console.log(username);
	  return this.storage.get(username+'todos');
  }
  */
  
  getData(username)
  {
	  return Observable.create(observer => {
			console.log(username);
			this.retrieveData(username).then((todo)=>{ //promise function, needed or else just skips waiting for backend and returns undefined
			  if(todo){
				  let todos = todo;
				  observer.next(todo);
				  observer.complete();
				  }
				  else
				  {
					  let todos = undefined;
					  observer.next(todo);
					  observer.complete();
				  }	});
		  });
  }
  
  retrieveData(username) { //promise function to get data
	  return this.storage.get(username+'todos');
  }
  
  saveData(data,username) //update storage data
  {
	  this.storage.set(username+'todos',data);
  }

}
