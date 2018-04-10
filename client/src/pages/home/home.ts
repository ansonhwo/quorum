import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from 'ionic-angular';
import { ENV } from '@app/env';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  constructor(
    public menu: MenuController,
    public navCtrl: NavController
  ) {}

  ngOnInit(): void {
    console.log(`env vars: ${JSON.stringify(ENV)}`);
  }
}
