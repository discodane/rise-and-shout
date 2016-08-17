import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import {GraphPage } from "../graph-page/graph-page";

@Component({
  templateUrl: 'build/pages/login/login.html'
})
export class LoginPage {
	constructor(public navCtrl: NavController) {

	}

	login() {
		this.navCtrl.setRoot(GraphPage);
	}
}
