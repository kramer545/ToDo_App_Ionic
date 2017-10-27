//import { Injectable } from '@angular/core';
const Injectable = require ('@angular/core');
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { Storage } from '@ionic/Storage'; //used to store data
import {IonicStorageModule} from '@ionic/Storage';
import 'rxjs/add/operator/map';

//import md5 = require('js-md5');
import * as md5 from 'js-md5';

describe("Player", function() {
  var Player = require('../../lib/jasmine_examples/Player');
  var Song = require('../../lib/jasmine_examples/Song');
  var player;
  var song;

  beforeEach(function() {
    player = new Player();
    song = new Song();
  });

  it("should be able to play a Song", function() {
    player.play(song);
    expect(player.currentlyPlayingSong).toEqual(song);

    //demonstrates use of custom matcher
    expect(player).toBePlaying(song);
  });

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
	this.storage.set('user1',new User("user1",md5("user1")));
	this.storage.set('user2',new User("user2",md5("user2")));
  }
  
  login(user)
  {
		if (user.username === null || user.passworde === null) {
		  return Observable.throw("Please insert user");
		} else {
		  return Observable.create(observer => {
			this.getUser(user.username).then((currUser)=>{
			  if(currUser){
				  this.currUser = currUser;
				  if(md5(user.passworde) === currUser.passworde)
				  {
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
  
  getUser(username) //promise function
  {
	  return this.storage.get(username);
  }

}

describe( "Convert library", function () {
    describe( "distance converter", function () {

        });

        describe( "volume converter", function () {

    });
});
