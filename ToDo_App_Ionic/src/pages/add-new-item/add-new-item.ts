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
	  let newTask = {taskCont: this.taskCont};
	  //closes this page, goes back to home w/ new task
	  this.view.dismiss(newTask);
  }
  
  close()
  {
	  this.view.dismiss();
  }

}
