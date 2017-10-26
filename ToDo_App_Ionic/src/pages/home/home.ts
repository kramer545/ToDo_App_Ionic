import { Component } from '@angular/core';
import { NavController , ModalController } from 'ionic-angular';
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
	public User = null;
	isLoggedIn:boolean = false;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public dataService: DataProvider) {
	this.dataService.getData().then((todos)=>{if(todos){this.todoItems = todos}}); //get tasks from storage, if exists assign to item
	
	if(!this.isLoggedIn)
		this.login();
  }
  
  //function triggered on page load
  ionViewDidLoad()
  {
	  
  }
  
  login()
  {
	  let addModal = this.modalCtrl.create(LoginPage);
 
    addModal.onDidDismiss((currUser) => {
 
          if(currUser){
			console.log(this.isLoggedIn+"------");
          }
 
    });
 
    addModal.present();
  }
  
  addItem()
  {
	 let addModal = this.modalCtrl.create(AddNewItemPage);
 
    addModal.onDidDismiss((item) => {
 
          if(item){
            this.todoItems.push(item);
			this.dataService.saveData(this.todoItems);
          }
 
    });
 
    addModal.present();
  }
  
  viewItem(item)
  {
	  this.todoItems.splice(this.todoItems.indexOf(item),1);
	  this.dataService.saveData(this.todoItems);
  }
}
