import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the AddNewItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-add-new-item',
  templateUrl: 'add-new-item.html',
})
export class AddNewItemPage {
	
  taskCont: string; //task contents

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddNewItemPage');
  }
  
  saveItem()
  {
	  //catch unfilled and just spaces and don't add them to list
	  if(this.taskCont === undefined)
		  this.view.dismiss();
	  else if (this.taskCont.trim() == "")
		  this.view.dismiss();
	  else
	  { 
		  let newTask = {taskCont: this.taskCont.trim()};
		  //closes this page, goes back to home w/ new task
		  this.view.dismiss(newTask);
	  }
  }
  
  close()
  {
	  this.view.dismiss();
  }

}
