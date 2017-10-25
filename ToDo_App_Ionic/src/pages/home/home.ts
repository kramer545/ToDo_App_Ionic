import { Component } from '@angular/core';
import { NavController , ModalController } from 'ionic-angular';
import { AddNewItemPage } from '../add-new-item/add-new-item'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	
	public todoItems = [];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
		//Display list
  }
  
  //function triggered on page load
  ionViewDidLoad()
  {
	  
  }
  
  addItem()
  {
	 let addModal = this.modalCtrl.create(AddNewItemPage);
 
    addModal.onDidDismiss((item) => {
 
          if(item){
            this.todoItems.push(item);
          }
 
    });
 
    addModal.present();
  }
  
  viewItem(item)
  {
	  this.todoItems.pop(item);
  }
}
