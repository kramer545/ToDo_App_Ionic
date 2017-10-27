import { Component } from '@angular/core';
import { NavController , ModalController, NavParams } from 'ionic-angular';
import { AddNewItemPage } from '../add-new-item/add-new-item'
import { DataProvider } from '../../providers/data/data';
import { LoginPage } from '../login/login';
import { AuthLoginProvider } from '../../providers/auth-login/auth-login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	
	public todoItems = [];
	public username: string = "";

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public dataService: DataProvider, public navParams: NavParams) {
	this.username = navParams.get("username");
	this.dataService.getData(this.username).then((todos)=>{if(todos){this.todoItems = todos}}); //get tasks from storage, if exists assign to item
	
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
