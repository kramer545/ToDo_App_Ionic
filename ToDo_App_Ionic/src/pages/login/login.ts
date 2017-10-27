import { Component } from '@angular/core';
import { IonicPage, AlertController, NavController, NavParams, ViewController } from 'ionic-angular';
import { AuthLoginProvider } from '../../providers/auth-login/auth-login';
import { HomePage } from '../home/home';

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
	currUser;
	errorMsg: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController, public loginService: AuthLoginProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  
  login()
  {
	let user = {username: this.username, passworde: this.passworde};
	this.errorMsg = "";
	this.loginService.login(user).subscribe(allowed=> {
		if(allowed){
			console.log("Allowed");
			this.navCtrl.push(HomePage);
		}
		else {
			console.log("Denied");
			this.errorMsg = "Access Denied";
		}
	},
	error => {
		this.errorMsg = "Error Occured";
	});
	//let credPassword = {passworde: this.passworde};
	//this.view.dismiss(isLoggedIn);//,credPassword);
  }

}
