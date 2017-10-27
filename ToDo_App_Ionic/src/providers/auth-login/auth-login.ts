import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { Storage } from '@ionic/Storage'; //used to store data
import {IonicStorageModule} from '@ionic/Storage';
import 'rxjs/add/operator/map';

//import md5 = require('js-md5');
import * as md5 from 'js-md5';

/*
  Generated class for the AuthLoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

export class User 
{
	username: string;
	passworde: string;
	
	constructor (username: string, passworde: string)
	{
		this.username = username;
		this.passworde = passworde;
	}
}
@Injectable()
export class AuthLoginProvider {
	
	currUser: User;

  constructor(public http: Http, public storage: Storage) {
    //console.log('Hello AuthLoginProvider Provider');
	//insert 2 users in storage for testing
	this.currUser = new User("user1",md5("user1"));
	this.storage.set('user1',this.currUser);
	this.storage.set('user2',new User("user2",md5("user2")));
  }
  
  login(user)
  {
		if (user.username === null || user.passworde === null) {
		  return Observable.throw("Please insert user");
		} else {
		  return Observable.create(observer => {
			// At this point make a request to your backend to make a real check!
			//have to do have observer return false in then otherwise it will always trigger
			this.getUser(user.username).then((currUser)=>{
			  if(currUser){
				  this.currUser = currUser;
				  console.log(currUser);
				  console.log(md5(user.passworde));
				  console.log(md5(user.passworde) === currUser.passworde);
				  if(md5(user.passworde) === currUser.passworde)
				  {
					  console.log("login worked");
					  let access = true;
					  observer.next(access);
					  observer.complete();
				  }
				  else
				  {
					 let access = false;
					 observer.next(access);
					 observer.complete();
				  }	
				  }
				  else
				  {
					 let access = false;
					 observer.next(access);
					 observer.complete();
				  }	}				  );
		  });
		}
	}
  
  /*
  logine(user)
  {
	console.log(user.username+" "+user.passworde);
	  if(user.username === undefined || user.passworde === undefined)
	  {
		  console.log("not all creds filled out");
	  }
	  else
	  {
		  //make request to get a user from the database
		  this.getUser(user.username).then((currUser)=>{
			  if(currUser){
				  this.currUser = currUser;
				  console.log(currUser);
				  console.log(md5(user.passworde));
				  console.log(md5(user.passworde) === currUser.passworde);
				  if(md5(user.passworde) === currUser.passworde)
				  {
					  console.log("login worked");
					  return this.currUser;
				  }
				  }}); //get tasks from storage, if exists assign to item
	  }
	  return currUser;
  }
  */
  
  getUser(username)
  {
	  return this.storage.get(username);
  }

}
