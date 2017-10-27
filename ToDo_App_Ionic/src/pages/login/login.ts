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
	errorMsg: string = "";
	loggedInUsername:string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController, public loginService: AuthLoginProvider) {
	  
  }
  
  login()
  {
	
	let user = {username: this.username, passworde: this.passworde};
	this.errorMsg = ""; //resets errorMsg
	this.loggedInUsername = this.username;
	this.loginService.login(user).subscribe(allowed=> {
		if(allowed){
			this.navCtrl.push(HomePage, {username:this.loggedInUsername}); //go to homepgae
		}
		else {
			this.errorMsg = "Access Denied";
		}
	},
	error => {
		this.errorMsg = "Error Occured";
	});
	//clear form data, as returning from homepage leaves the values up
	this.username = "";
	this.passworde = "";
  }

}
