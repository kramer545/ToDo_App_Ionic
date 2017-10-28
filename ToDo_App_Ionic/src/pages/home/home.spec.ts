import { async, TestBed, inject } from '@angular/core/testing';
import { Component } from '@angular/core';
import { NavController , ModalController, NavParams } from 'ionic-angular';
import { AddNewItemPage } from '../add-new-item/add-new-item'
import { DataProvider } from '../../providers/data/data';
import { LoginPage } from '../login/login';
import { AuthLoginProvider } from '../../providers/auth-login/auth-login';
import { Storage } from '@ionic/Storage'; //used to store data
import { MyApp } from '../../app/app.component';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import {IonicStorageModule} from '@ionic/Storage';
import 'rxjs/add/operator/toPromise';


import {
  PlatformMock,
  StatusBarMock,
  SplashScreenMock
} from '../../../test-config/mocks-ionic';



describe('HomePage Tests', () => {
  let todoItems = [];
  let storage;
  let loginBackend;

  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations:[MyApp],
      imports: [
		BrowserModule,
		HttpModule,
		IonicModule.forRoot(MyApp),
		IonicStorageModule.forRoot()
      ],
      providers: [
		StatusBar,
		SplashScreen,
		DataProvider,
		{provide: ErrorHandler, useClass: IonicErrorHandler},
		AuthLoginProvider
      ]
    })
  }));
	

  beforeEach(inject( [DataProvider], ( dataProvider ) => {
    //fixture = TestBed.createComponent(MyApp);
    //component = fixture.componentInstance;
	//storage: Storage
	//loginBackend = TestBed.createComponent(DataProvider).componentInstance;
	//this.storage.set('test',['item1','item2']);
		dataProvider.saveData(['test1','test2'],"test");
  }));
  
  it('retrieveing todos works', inject( [DataProvider], ( dataProvider ) =>{
	  return dataProvider.getData("test").toPromise().then(todos => {
		if(todos && todos != undefined){
			expect(todos.length).toBe(2);
		}
		else { //for when it can't find todos
			console.log("not todos");
			expect(false).toBe(true);
		}
	},
	error => {
		console.log("error occured getting todos");
		expect(false).toBe(true);
	});
	
	}));
  
  it('saving data works', inject( [DataProvider], ( dataProvider ) =>{
	  dataProvider.saveData(['test1','test2','test3'],"test");
	  setTimeout(function () { //since storage.set DOESNT WANT TO TELL ME WHEN ITS DONE, I simply wait a second, which should be plenty of time
		  return dataProvider.getData("test").toPromise().then(todos => {
				if(todos && todos != undefined){
					expect(todos.length).toBe(3);
				}
				else { //for when it can't find todos
					console.log("not todos");
					expect(false).toBe(true);
				}
			},
			error => {
				console.log("error occured getting todos");
				expect(false).toBe(true);
			});
	  }, 1000);
	});
});
/*
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	
	public todoItems = [];
	public username: string = "";

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public dataService: DataProvider, public navParams: NavParams) {
	this.username = navParams.get("username");
	//this.dataService.getData(this.username).then((todos)=>{if(todos){this.todoItems = todos}}); //get tasks from storage, if exists assign to item
	this.dataService.getData(this.username).subscribe(todos => {
		if(todos && todos != undefined){
			this.todoItems = todos;
		}
		else { //for when it can't find todos
			console.log("not todos");
		}
	},
	error => {
		console.log("error occured getting todos");
	});
	
  }
  
  //function triggered on page load
  ionViewDidLoad()
  {
	  
  }
  
  addItem() //add new todo item
  {
	//start new model, and when its done if there is text, add it to list
	let addModal = this.modalCtrl.create(AddNewItemPage);
 
    addModal.onDidDismiss((item) => { //triggers when model is closed via finished btn
          if(item){
            this.todoItems.push(item);
			this.dataService.saveData(this.todoItems,this.username);
          }
 
    });
 
    addModal.present(); //shows model
  }
  
  removeItem(item) //remove item passed to this function
  {
	  this.todoItems.splice(this.todoItems.indexOf(item),1);
	  this.dataService.saveData(this.todoItems,this.username);
  }
}
*/
