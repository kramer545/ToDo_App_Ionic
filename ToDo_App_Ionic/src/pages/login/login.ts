import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { AuthLoginProvider } from '../../providers/auth-login/auth-login';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {
	
	username: string;
	passworde: string;
	isLoggedIn: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController, public loginService: AuthLoginProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  
  login()
  {
	let user = {username: this.username, passworde: this.passworde};
	this.loginService.logine(user).then((currUser)=>{if(currUser){this.view.dismiss(currUser);}});
	//let credPassword = {passworde: this.passworde};
	//this.view.dismiss(isLoggedIn);//,credPassword);
  }

}
